use super::super::data::ResponsePokeImgData;
use crate::application::api::contract::ApiContract;
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::{get_api_version, get_user_id_from_auth_header, part_from_path};

pub async fn handle_fetch_rand_pokemon<T: ApiContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_fetch_rand_pokemon_v1(request, service).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_fetch_rand_pokemon_v1<T: ApiContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    let user_id = get_user_id_from_auth_header(&request)?;
    let catch_id: String = part_from_path(&request, "catch_id")?;
    let pokemon = service.get_pokemon_image(user_id, catch_id).await?;
    let response = ResponsePokeImgData::new(pokemon.0, pokemon.1);

    Ok(HttpResponse::Ok().json(response))
}
