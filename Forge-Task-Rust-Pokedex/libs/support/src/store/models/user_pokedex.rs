use chrono::{DateTime, Utc};
use diesel::{ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::user_pokedexes};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, PartialEq, Eq, Insertable, Deserialize, Serialize, Queryable)]
#[diesel(table_name = user_pokedexes)]
#[diesel(treat_none_as_null = true)]
pub struct UserPokedex {
    pub id: String,
    pub user_id: String,
    pub pokemon_id: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl UserPokedex {
    // Method to insert into pokedex
    pub fn insert_into_pokedex(
        conn: &mut DbConnection,
        user_id: String,
        pokemon_id: String,
    ) -> Result<(), Error> {
        diesel::insert_into(user_pokedexes::dsl::user_pokedexes)
            .values(UserPokedex {
                id: Uuid::new_v4().to_string(),
                user_id,
                pokemon_id,
                created_at: Utc::now(),
                updated_at: Utc::now(),
            })
            .execute(conn)
            .map_err(Error::Diesel)?;
        Ok(())
    }

    // Method to fetch users pokedex
    pub fn fetch_user_pokedex(
        conn: &mut DbConnection,
        user_id: String,
    ) -> Result<UserPokedex, Error> {
        user_pokedexes::dsl::user_pokedexes
            .filter(user_pokedexes::dsl::user_id.eq(user_id))
            .first::<UserPokedex>(conn)
            .map_err(Error::Diesel)
    }
}
