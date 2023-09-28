use chrono::{DateTime, Utc};
use diesel::{dsl::count_star, ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::pokemons};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::pokemon_api_response::PokemonAPIResponse;

#[derive(Debug, Clone, PartialEq, Eq, Insertable, Deserialize, Serialize, Queryable)]
#[diesel(table_name = pokemons)]
#[diesel(treat_none_as_null = true)]
// Pokemon struct that represents the database table
pub struct Pokemon {
    pub id: String,
    pub name: Option<String>,
    pub base_experience: Option<i32>,
    pub height: Option<i32>,
    pub pokemon_id: Option<i32>,
    pub is_default: Option<bool>,
    pub pokemon_order: Option<i32>,
    pub image: Option<String>,
    pub weight: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Pokemon {
    // Method to create a new Pokemon entry in the database
    pub fn create_pokemon(conn: &mut DbConnection, new_pokemon: &Self) -> Result<(), Error> {
        diesel::insert_into(pokemons::dsl::pokemons)
            .values(new_pokemon)
            .execute(conn)
            .map_err(Error::Diesel)?;
        Ok(())
    }

    // Method to create Pokemon instances from API response data
    pub fn from_api_response(api_response: PokemonAPIResponse) -> Self {
        let image_url = match api_response.sprites {
            Some(sprites) => sprites.front_default,
            None => None,
        };

        Self {
            id: Uuid::new_v4().to_string(),
            name: api_response.name,
            base_experience: api_response.base_experience,
            height: api_response.height,
            pokemon_id: api_response.id,
            is_default: api_response.is_default,
            pokemon_order: api_response.order,
            image: image_url,
            weight: api_response.weight,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        }
    }

    // Method to check if the Pokemon table is empty in the database
    pub fn is_empty(conn: &mut DbConnection) -> Result<bool, diesel::result::Error> {
        let count_result: i64 = pokemons::dsl::pokemons.select(count_star()).first(conn)?;
        Ok(count_result == 0)
    }

    // Method to find a Pokemon entry by its pokemon_id in the database
    pub fn find_pokemon_by_pokemon_id(
        conn: &mut DbConnection,
        pokemon_id: i32,
    ) -> Result<Self, Error> {
        let result = pokemons::dsl::pokemons
            .filter(pokemons::pokemon_id.eq(pokemon_id))
            .first(conn)
            .map_err(Error::Diesel)?;
        Ok(result)
    }

    // Method to fetch all pokemon entries from the database
    pub fn fetch_all_pokemons(conn: &mut DbConnection) -> Result<Vec<Self>, Error> {
        let result = pokemons::dsl::pokemons
            .load::<Self>(conn)
            .map_err(Error::Diesel)?;
        Ok(result)
    }

    // Method to fetch pokemon by name from the database
    pub fn fetch_pokemon_by_name(conn: &mut DbConnection, name: String) -> Result<Self, Error> {
        let result = pokemons::dsl::pokemons
            .filter(pokemons::name.eq(name))
            .first(conn)
            .map_err(Error::Diesel)?;
        Ok(result)
    }
}
