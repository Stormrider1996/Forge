use std::vec;

use super::super::data::PokedexResponseData;
use crate::application::api::contract::ApiContract;
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::{get_api_version, get_user_id_from_auth_header};

pub async fn handle_fetch_users_pokedex<T: ApiContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_fetch_users_pokedex_v1(request, service).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_fetch_users_pokedex_v1<T: ApiContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    let user_id = get_user_id_from_auth_header(&request)?;
    println!("user_id: {}", user_id);
    let pokedex = service.get_users_pokedex(user_id).await?;
    let pokedex_vector = vec![pokedex];
    let response = PokedexResponseData::new(pokedex_vector);

    Ok(HttpResponse::Ok().json(response))
}
