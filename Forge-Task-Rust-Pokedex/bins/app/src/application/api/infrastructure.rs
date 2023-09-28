use std::sync::Arc;

use async_trait::async_trait;
use error::Error;
use infrastructure::db::Pg;
use support::store::models::{
    pokemon::Pokemon, pokemon_catches::PokemonCatches, user_pokedex::UserPokedex,
};

use crate::application::{api::contract::PgRepositoryContract, api::contract::PgServiceContract};

pub struct PgRepository {
    pub pg_pool: Arc<Pg>,
}

#[async_trait]
impl PgRepositoryContract for PgRepository {
    async fn find_pokemon_by_pokemon_id(&self, pokemon_id: i32) -> Result<Pokemon, Error> {
        let mut conn = self.pg_pool.connection()?;
        Pokemon::find_pokemon_by_pokemon_id(&mut conn, pokemon_id)
    }

    async fn fetch_all_pokemons(&self) -> Result<Vec<Pokemon>, Error> {
        let mut conn = self.pg_pool.connection()?;
        Pokemon::fetch_all_pokemons(&mut conn)
    }

    async fn fetch_all_pokemon_catches_by_user_id(
        &self,
        user_id: String,
    ) -> Result<Vec<PokemonCatches>, Error> {
        let mut conn = self.pg_pool.connection()?;
        PokemonCatches::fetch_all_pokemon_catches_by_user_id(&mut conn, user_id)
    }

    async fn find_pokemon_catch_by_catch_id(
        &self,
        catch_id: String,
    ) -> Result<Vec<PokemonCatches>, Error> {
        let mut conn = self.pg_pool.connection()?;
        PokemonCatches::find_pokemon_catch_by_catch_id(&mut conn, catch_id)
    }

    async fn fetch_pokemon_by_name(&self, name: String) -> Result<Pokemon, Error> {
        let mut conn = self.pg_pool.connection()?;
        Pokemon::fetch_pokemon_by_name(&mut conn, name)
    }

    async fn fetch_user_pokedex(&self, user_id: String) -> Result<UserPokedex, Error> {
        let mut conn = self.pg_pool.connection()?;
        UserPokedex::fetch_user_pokedex(&mut conn, user_id)
    }
}

pub struct PgService {
    pub pg_pool: Arc<Pg>,
}

#[async_trait]
impl PgServiceContract for PgService {
    async fn insert_and_get_catch(
        &self,
        pokemon_id: String,
        user_id: String,
    ) -> Result<PokemonCatches, Error> {
        let mut conn = self.pg_pool.connection()?;
        PokemonCatches::insert_and_get_catch(&mut conn, pokemon_id, user_id)
    }

    async fn insert_into_pokedex(&self, user_id: String, pokemon_id: String) -> Result<(), Error> {
        let mut conn = self.pg_pool.connection()?;
        UserPokedex::insert_into_pokedex(&mut conn, user_id, pokemon_id)
    }

    async fn update_is_success_to_true(&self, catch_id: String) -> Result<(), Error> {
        let mut conn = self.pg_pool.connection()?;
        PokemonCatches::update_is_success_to_true(&mut conn, catch_id)
    }
}
