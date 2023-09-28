use chrono::{DateTime, Utc};
use diesel::{ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::pokemon_stats};
use uuid::Uuid;

use super::pokemon_api_response::PokemonAPIResponse;

#[derive(Debug, Clone, Insertable, Queryable, PartialEq, Eq)]
#[diesel(table_name = pokemon_stats)]
#[diesel(treat_none_as_null = true)]
// PokemonStat struct that represents the database table
pub struct PokemonStat {
    pub id: String,
    pub pokemon_id: String,
    pub name: Option<String>,
    pub base_stat: Option<i32>,
    pub effort: Option<i32>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl PokemonStat {
    // Method to create a new PokemonStat entry in the database
    pub fn create_pokemon_stat(
        conn: &mut DbConnection,
        new_pokemon_stat: &Self,
    ) -> Result<(), Error> {
        diesel::insert_into(pokemon_stats::dsl::pokemon_stats)
            .values(new_pokemon_stat)
            .execute(conn)
            .map_err(Error::Diesel)?;
        Ok(())
    }

    // Method to create PokemonStat instances from API response data
    pub fn from_api_response(api_response: PokemonAPIResponse, pokemon_id: String) -> Vec<Self> {
        api_response
            .stats
            .iter()
            .map(|s| (s.stat.name.clone(), s.base_stat, s.effort))
            .map(|(name, base_stat, effort)| Self {
                id: Uuid::new_v4().to_string(),
                pokemon_id: pokemon_id.clone(),
                name,
                base_stat,
                effort,
                created_at: Utc::now(),
                updated_at: Utc::now(),
            })
            .collect()
    }

    // Method to check if the PokemonStat table is empty in the database
    pub fn is_empty(conn: &mut DbConnection) -> Result<bool, Error> {
        let count_result: i64 = pokemon_stats::dsl::pokemon_stats.count().get_result(conn)?;
        Ok(count_result == 0)
    }

    // Method to find a PokemonStat entry by its name in the database
    pub fn find_stat_by_name(conn: &mut DbConnection, stat_name: &str) -> Result<Self, Error> {
        let result = pokemon_stats::dsl::pokemon_stats
            .filter(pokemon_stats::name.eq(stat_name))
            .first(conn)
            .map_err(Error::Diesel)?;
        Ok(result)
    }
}
