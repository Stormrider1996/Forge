use super::super::contract::AuthContract;
use crate::application::auth::data::ResponseLoginData;
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::get_api_version;

pub async fn handle_refresh_token<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_refresh_token_v1(request, service).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_refresh_token_v1<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    let cookie = request.cookie("refresh_token");
    let refresh_token = match cookie {
        Some(ref cookie) => cookie.value().to_string(),
        None => return Err(Error::Unauthorized("Unauthorized".to_string())),
    };

    let access_token = service.access_from_refresh(&refresh_token).await?;
    let response = ResponseLoginData::new(access_token);

    Ok(HttpResponse::Ok().json(response))
}
