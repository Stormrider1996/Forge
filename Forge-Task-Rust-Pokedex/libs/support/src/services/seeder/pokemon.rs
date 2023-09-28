use error::Error;
use infrastructure::db::DbConnection;

use crate::{
    helpers::pokemon::{fetch_pokemon_data, insert_pokemon_with_abilities_types_stats},
    store::models::pokemon::Pokemon,
};

pub async fn insert_pokemons(conn: &mut DbConnection) -> Result<(), Error> {
    if Pokemon::is_empty(conn)? {
        for id in 1..=151 {
            let api_response = fetch_pokemon_data(id).await?;
            let pokemon = Pokemon::from_api_response(api_response.clone());
            insert_pokemon_with_abilities_types_stats(conn, &pokemon, api_response.clone()).await?;
        }
    }

    Ok(())
}
