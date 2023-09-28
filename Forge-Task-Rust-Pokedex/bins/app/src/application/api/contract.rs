use async_trait::async_trait;
use error::Error;
use mockall::automock;
use support::store::models::{
    pokemon::Pokemon, pokemon_catches::PokemonCatches, user_pokedex::UserPokedex,
};

#[automock]
#[async_trait]
pub trait ApiContract {
    async fn find_or_create_pokemon_catch(
        &self,
        catch_id: String,
        pokemon_id: String,
        user_id: String,
    ) -> Result<PokemonCatches, Error>;
    async fn get_pokemon_image(
        &self,
        user_id: String,
        catch_id: String,
    ) -> Result<(String, String), Error>;
    async fn insert_into_pokedex_if_successful(
        &self,
        user_id: String,
        pokemon_id: String,
        catch_id: String,
    ) -> Result<(), Error>;
    async fn get_users_pokedex(&self, user_id: String) -> Result<UserPokedex, Error>;
}

#[automock]
#[async_trait]
pub trait PgRepositoryContract {
    async fn find_pokemon_by_pokemon_id(&self, pokemon_id: i32) -> Result<Pokemon, Error>;
    async fn fetch_all_pokemons(&self) -> Result<Vec<Pokemon>, Error>;
    async fn fetch_all_pokemon_catches_by_user_id(
        &self,
        user_id: String,
    ) -> Result<Vec<PokemonCatches>, Error>;
    async fn find_pokemon_catch_by_catch_id(
        &self,
        catch_id: String,
    ) -> Result<Vec<PokemonCatches>, Error>;
    async fn fetch_pokemon_by_name(&self, name: String) -> Result<Pokemon, Error>;
    async fn fetch_user_pokedex(&self, user_id: String) -> Result<UserPokedex, Error>;
}

#[automock]
#[async_trait]
pub trait PgServiceContract {
    async fn insert_and_get_catch(
        &self,
        pokemon_id: String,
        user_id: String,
    ) -> Result<PokemonCatches, Error>;
    async fn insert_into_pokedex(&self, user_id: String, pokemon_id: String) -> Result<(), Error>;
    async fn update_is_success_to_true(&self, catch_id: String) -> Result<(), Error>;
}
