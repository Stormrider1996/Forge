use error::Error;
use infrastructure::db::DbConnection;

use crate::store::models::{
    pokemon::Pokemon, pokemon_ability::PokemonAbility, pokemon_api_response::PokemonAPIResponse,
    pokemon_stat::PokemonStat, pokemon_type::PokemonType,
};

// Fetches Pokemon data from an API based on the provided ID
pub async fn fetch_pokemon_data(id: i32) -> Result<PokemonAPIResponse, Error> {
    PokemonAPIResponse::fetch_pokemon_data(id).await
}

// Inserts abilities associated with a Pokemon into the database
async fn insert_abilities(
    conn: &mut DbConnection,
    pokemon: &Pokemon,
    api_response: PokemonAPIResponse,
) -> Result<(), Error> {
    let abilities = PokemonAbility::from_api_response(api_response, pokemon.id.clone());
    for ability in abilities {
        PokemonAbility::create_pokemon_ability(conn, &ability)?; // Create an ability entry in the database
    }

    Ok(())
}

// Inserts types associated with a Pokemon into the database
async fn insert_types(
    conn: &mut DbConnection,
    pokemon: &Pokemon,
    api_response: PokemonAPIResponse,
) -> Result<(), Error> {
    let types = PokemonType::from_api_response(api_response, pokemon.id.clone());
    for pokemon_type in types {
        PokemonType::create_pokemon_type(conn, &pokemon_type)?; // Create a type entry in the database
    }

    Ok(())
}

// Inserts stats associated with a Pokemon into the database
async fn insert_stats(
    conn: &mut DbConnection,
    pokemon: &Pokemon,
    api_response: PokemonAPIResponse,
) -> Result<(), Error> {
    let stats = PokemonStat::from_api_response(api_response, pokemon.id.clone());
    for pokemon_stat in stats {
        PokemonStat::create_pokemon_stat(conn, &pokemon_stat)?; // Create a stat entry in the database
    }

    Ok(())
}

// Inserts a Pokemon along with its abilities, types, and stats into the database
pub async fn insert_pokemon_with_abilities_types_stats(
    conn: &mut DbConnection,
    pokemon: &Pokemon,
    api_response: PokemonAPIResponse,
) -> Result<(), Error> {
    Pokemon::create_pokemon(conn, pokemon)?; // Create a Pokemon entry in the database

    insert_abilities(conn, pokemon, api_response.clone()).await?; // Insert abilities into the database
    insert_types(conn, pokemon, api_response.clone()).await?; // Insert types into the database
    insert_stats(conn, pokemon, api_response).await?; // Insert stats into the database

    Ok(())
}
