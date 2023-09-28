use actix_web::{http, web, HttpResponse, ResponseError};
use diesel::prelude::*;
use dotenvy::dotenv;
use infrastructure::db::{setup_test_database, Pg};
use infrastructure::schema::{pokemon_abilities, pokemon_stats, pokemon_types, pokemons};
use support::helpers::pokemon::fetch_pokemon_data;
use support::services::seeder::pokemon::insert_pokemons;
use support::store::models::{
    pokemon::Pokemon, pokemon_ability::PokemonAbility, pokemon_stat::PokemonStat,
    pokemon_type::PokemonType,
};
use validr::Validation;

use super::data::RequestUserData;

async fn test_actix_route_handler_user_attributes(
    test: web::Json<RequestUserData>,
) -> HttpResponse {
    match test.into_inner().validate() {
        Ok(item) => {
            println!("This is your data validated and modified: {:#?}", item);
            HttpResponse::Ok().body("Validation passed!")
        }
        Err(e) => e.error_response(),
    }
}

#[tokio::test]
async fn test_fetch_pokemon_data() {
    let pokemon_id = 25;
    let expected_name = "pikachu";
    let expected_height = 4;
    let expected_weight = 60;

    let result = fetch_pokemon_data(pokemon_id).await;

    assert!(result.is_ok());

    let pokemon = result.unwrap();
    assert_eq!(pokemon.name.unwrap(), expected_name);
    assert_eq!(pokemon.height.unwrap(), expected_height);
    assert_eq!(pokemon.weight.unwrap(), expected_weight);
}

#[tokio::test]
async fn test_pokemon_seeder() {
    dotenv().ok();
    let setup_result = setup_test_database();
    assert!(setup_result.is_ok());
    let pg = Pg::test();
    let connection = &mut Pg::connection(&pg).unwrap();
    let res = insert_pokemons(connection).await;
    assert!(res.is_ok());

    let pokemon_id = 1;
    let pokemon: Pokemon = pokemons::table
        .filter(pokemons::pokemon_id.eq(pokemon_id))
        .first::<Pokemon>(connection)
        .expect("pokemon not found");
    assert_eq!("bulbasaur", pokemon.name.unwrap());
    let pokemon_ability = pokemon_abilities::table
        .filter(pokemon_abilities::pokemon_id.eq(&pokemon.id))
        .first::<PokemonAbility>(connection)
        .expect("ability not found");
    assert_eq!("overgrow", pokemon_ability.name.unwrap());
    let stat = pokemon_stats::table
        .filter(pokemon_stats::pokemon_id.eq(&pokemon.id))
        .offset(2) //get third pokemon stat(defense)
        .get_result::<PokemonStat>(connection)
        .expect("stat not found");
    assert_eq!(49, stat.base_stat.unwrap());
    let pokemon_type = pokemon_types::table
        .filter(pokemon_types::pokemon_id.eq(&pokemon.id))
        .first::<PokemonType>(connection)
        .expect("type not found");
    assert_eq!("grass", pokemon_type.name.unwrap());
}

#[tokio::test]
async fn test_user_attributes_success() {
    let data = RequestUserData {
        first_name: Some("John".to_string()),
        last_name: Some("Doe".to_string()),
        email: Some("john@doe.com".to_string()),
        password: Some("12345678!".to_string()),
    };
    let response = test_actix_route_handler_user_attributes(web::Json(data)).await;

    assert_eq!(response.status(), http::StatusCode::OK)
}

#[tokio::test]
async fn test_user_attributes_none() {
    let data = RequestUserData {
        first_name: None,
        last_name: None,
        email: None,
        password: None,
    };
    let response = test_actix_route_handler_user_attributes(web::Json(data)).await;

    assert_eq!(response.status(), http::StatusCode::UNPROCESSABLE_ENTITY)
}
