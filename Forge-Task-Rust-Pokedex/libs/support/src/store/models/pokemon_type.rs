use chrono::{DateTime, Utc};
use diesel::{ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::pokemon_types};
use uuid::Uuid;

use super::pokemon_api_response::PokemonAPIResponse;

#[derive(Debug, Clone, Insertable, Queryable, PartialEq, Eq)]
#[diesel(table_name = pokemon_types)]
#[diesel(treat_none_as_null = true)]
// PokemonType struct that represents the database table
pub struct PokemonType {
    pub id: String,
    pub pokemon_id: String,
    pub name: Option<String>,
    pub slot: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl PokemonType {
    // Method to create a new PokemonType entry in the database
    pub fn create_pokemon_type(
        conn: &mut DbConnection,
        new_pokemon_type: &Self,
    ) -> Result<(), Error> {
        diesel::insert_into(pokemon_types::dsl::pokemon_types)
            .values(new_pokemon_type)
            .execute(conn)
            .map_err(Error::Diesel)?;
        Ok(())
    }

    // Method to create PokemonType instances from API response data
    pub fn from_api_response(api_response: PokemonAPIResponse, pokemon_id: String) -> Vec<Self> {
        api_response
            .types
            .iter()
            .map(|s| (s.slot, s.pokemon_type.name.clone()))
            .map(|(slot, name)| Self {
                id: Uuid::new_v4().to_string(),
                pokemon_id: pokemon_id.clone(),
                slot,
                name,
                created_at: Utc::now(),
                updated_at: Utc::now(),
            })
            .collect()
    }

    // Method to check if the PokemonType table is empty in the database
    pub fn is_empty(conn: &mut DbConnection) -> Result<bool, Error> {
        let count_result: i64 = pokemon_types::dsl::pokemon_types.count().get_result(conn)?;
        Ok(count_result == 0)
    }

    // Method to find a PokemonType entry by its name in the database
    pub fn find_type_by_name(conn: &mut DbConnection, type_name: &str) -> Result<Self, Error> {
        let result = pokemon_types::dsl::pokemon_types
            .filter(pokemon_types::name.eq(type_name))
            .first(conn)
            .map_err(Error::Diesel)?;
        Ok(result)
    }
}
