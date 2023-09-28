use super::contract::{ApiContract, PgRepositoryContract, PgServiceContract};
use async_trait::async_trait;
use error::Error;
use rand::prelude::*;
use support::store::models::{
    pokemon::Pokemon, pokemon_catches::PokemonCatches, user_pokedex::UserPokedex,
};

pub struct Api<A: PgRepositoryContract, B: PgServiceContract> {
    pub repository: A,
    pub service: B,
}

#[async_trait]
impl<A, B> ApiContract for Api<A, B>
where
    A: PgRepositoryContract + Send + Sync,
    B: PgServiceContract + Send + Sync,
{
    async fn find_or_create_pokemon_catch(
        &self,
        catch_id: String,
        pokemon_id: String,
        user_id: String,
    ) -> Result<PokemonCatches, Error> {
        let pokemon_catch = self
            .repository
            .find_pokemon_catch_by_catch_id(catch_id.clone())
            .await?;

        if pokemon_catch.is_empty() {
            let pokemon_catch = self
                .service
                .insert_and_get_catch(pokemon_id, user_id)
                .await?;
            return Ok(pokemon_catch);
        }
        Ok(pokemon_catch[0].clone())
    }

    async fn get_pokemon_image(
        &self,
        user_id: String,
        catch_id: String,
    ) -> Result<(String, String), Error> {
        let pokemon_catches = self
            .repository
            .fetch_all_pokemon_catches_by_user_id(user_id.clone())
            .await?;
        let pokemon = self.repository.fetch_all_pokemons().await?;

        // fetch only the pokemon ids where is_success is true
        let pokemon_ids = pokemon_catches
            .iter()
            .filter(|&pokemon_catch| pokemon_catch.is_success)
            .map(|pokemon_catch| pokemon_catch.pokemon_id.parse::<String>().unwrap())
            .collect::<Vec<String>>();

        // fetch only the pokemons not in pokemon_ids
        let pokemons = pokemon
            .iter()
            .filter(|&pokemon| !pokemon_ids.contains(&pokemon.id))
            .collect::<Vec<&Pokemon>>();

        // generate random number
        let number = thread_rng().gen_range(0..pokemons.len());

        // find or create new catch
        let new_catch = self
            .find_or_create_pokemon_catch(catch_id, pokemons[number].id.clone(), user_id)
            .await?;

        // return the pokemon
        Ok((pokemons[number].image.clone().unwrap(), new_catch.id))
    }

    async fn insert_into_pokedex_if_successful(
        &self,
        user_id: String,
        pokemon_name: String,
        catch_id: String,
    ) -> Result<(), Error> {
        let catch = self
            .repository
            .find_pokemon_catch_by_catch_id(catch_id.clone())
            .await?;
        if catch.is_empty() {
            return Err(Error::NotFound);
        } else {
            match self
                .repository
                .fetch_pokemon_by_name(pokemon_name.clone())
                .await
            {
                Ok(pokemon) => {
                    self.service
                        .insert_into_pokedex(user_id, pokemon.id)
                        .await?;
                    self.service.update_is_success_to_true(catch_id).await?;
                }
                Err(_) => return Err(Error::NotFoundWithCause(("Pokemon not caught").to_string())),
            };
        }
        Ok(())
    }

    async fn get_users_pokedex(&self, user_id: String) -> Result<UserPokedex, Error> {
        let pokedex = match self.repository.fetch_user_pokedex(user_id.clone()).await {
            Ok(pokedex) => pokedex,
            Err(_) => return Err(Error::NotFoundWithCause(("Pokedex is empty").to_string())),
        };

        Ok(pokedex)
    }
}
