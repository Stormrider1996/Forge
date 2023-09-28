use crate::application::api::{contract::ApiContract, data::RequestGuessData};
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::{get_api_version, get_user_id_from_auth_header, part_from_path};
use validr::Validation;

pub async fn handle_pokemon_guess<T: ApiContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<RequestGuessData>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_pokemon_guess_v1(request, service, data).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_pokemon_guess_v1<T: ApiContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<RequestGuessData>,
) -> Result<HttpResponse, Error> {
    let user_id = get_user_id_from_auth_header(&request)?;
    let data = data.into_inner().validate()?;
    let catch_id: String = part_from_path(&request, "catch_id")?;
    service
        .insert_into_pokedex_if_successful(user_id, data.guess.unwrap(), catch_id)
        .await?;

    Ok(HttpResponse::Ok().json("success"))
}
