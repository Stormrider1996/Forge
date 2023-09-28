use chrono::{DateTime, Utc};
use diesel::{ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::pokemon_abilities};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::pokemon_api_response::PokemonAPIResponse;

#[derive(Debug, Clone, PartialEq, Eq, Insertable, Deserialize, Serialize, Queryable)]
#[diesel(table_name = pokemon_abilities)]
#[diesel(treat_none_as_null = true)]
// PokemonAbility struct that represents the database table
pub struct PokemonAbility {
    pub id: String,
    pub pokemon_id: String,
    pub name: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl PokemonAbility {
    // Method to create a new PokemonAbility entry in the database
    pub fn create_pokemon_ability(
        conn: &mut DbConnection,
        pokemon_ability: &Self,
    ) -> Result<(), Error> {
        diesel::insert_into(pokemon_abilities::dsl::pokemon_abilities)
            .values(pokemon_ability)
            .execute(conn)
            .map_err(Error::Diesel)?;
        Ok(())
    }

    // Method to create PokemonAbility instances from API response data
    pub fn from_api_response(api_response: PokemonAPIResponse, pokemon_id: String) -> Vec<Self> {
        api_response
            .abilities
            .iter()
            .map(|fields| fields.ability.name.clone())
            .map(|name| Self {
                id: Uuid::new_v4().to_string(),
                pokemon_id: pokemon_id.clone(),
                name,
                created_at: Utc::now(),
                updated_at: Utc::now(),
            })
            .collect()
    }

    // Method to check if the PokemonAbility table is empty in the database
    pub fn is_empty(conn: &mut DbConnection) -> Result<bool, Error> {
        let count_result: i64 = pokemon_abilities::dsl::pokemon_abilities
            .count()
            .get_result(conn)?;
        Ok(count_result == 0)
    }

    // Method to find a PokemonAbility entry by its name in the database
    pub fn find_ability_by_name(
        conn: &mut DbConnection,
        ability_name: &str,
    ) -> Result<Self, Error> {
        let result = pokemon_abilities::dsl::pokemon_abilities
            .filter(pokemon_abilities::name.eq(ability_name))
            .first(conn)
            .map_err(Error::Diesel)?;
        Ok(result)
    }
}
