use chrono::{DateTime, Utc};
use diesel::{ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::pokemon_catches};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, PartialEq, Eq, Insertable, Deserialize, Serialize, Queryable)]
#[diesel(table_name = pokemon_catches)]
#[diesel(treat_none_as_null = true)]
pub struct PokemonCatches {
    pub id: String,
    pub user_id: String,
    pub pokemon_id: String,
    pub is_success: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl PokemonCatches {
    // Method to fetch all Pokemon catches by user id
    pub fn fetch_all_pokemon_catches_by_user_id(
        conn: &mut DbConnection,
        user_id: String,
    ) -> Result<Vec<Self>, Error> {
        pokemon_catches::dsl::pokemon_catches
            .filter(pokemon_catches::dsl::user_id.eq(user_id))
            .load::<Self>(conn)
            .map_err(Error::Diesel)
    }

    // Method insert and get with pokemon id and user id
    pub fn insert_and_get_catch(
        conn: &mut DbConnection,
        pokemon_id: String,
        user_id: String,
    ) -> Result<Self, Error> {
        diesel::insert_into(pokemon_catches::dsl::pokemon_catches)
            .values((
                pokemon_catches::dsl::pokemon_id.eq(pokemon_id),
                pokemon_catches::dsl::user_id.eq(user_id),
            ))
            .get_result::<Self>(conn)
            .map_err(Error::Diesel)
    }

    // Find pokemon catch by catch id
    pub fn find_pokemon_catch_by_catch_id(
        conn: &mut DbConnection,
        catch_id: String,
    ) -> Result<Vec<Self>, Error> {
        pokemon_catches::dsl::pokemon_catches
            .filter(pokemon_catches::dsl::id.eq(catch_id))
            .load::<Self>(conn)
            .map_err(Error::Diesel)
    }

    // update is_success to true
    pub fn update_is_success_to_true(
        conn: &mut DbConnection,
        catch_id: String,
    ) -> Result<(), Error> {
        diesel::update(pokemon_catches::dsl::pokemon_catches)
            .filter(pokemon_catches::dsl::id.eq(catch_id))
            .set(pokemon_catches::dsl::is_success.eq(true))
            .execute(conn)
            .map_err(Error::Diesel)?;
        Ok(())
    }
}
