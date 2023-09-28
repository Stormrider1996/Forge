use crate::application::auth::data::ResponseLoginData;

use super::super::contract::AuthContract;
use actix_web::{cookie::Cookie, web, HttpRequest, HttpResponse};
use cookie::time;
use error::Error;
use support::helpers::http::{get_api_version, part_from_path};

pub async fn handle_verify_email<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_verify_email_v1(request, service).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_verify_email_v1<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    let token: String = part_from_path(&request, "token")?; // Change the type to String
    let login_data = service.verify_email(&token).await?; // Use &token instead of token
    let response = ResponseLoginData::new(login_data.0);
    let cookie = Cookie::build("refresh_token", login_data.1)
        .max_age(time::Duration::days(30))
        .path("/")
        .finish();

    Ok(HttpResponse::Ok().cookie(cookie).json(response))
}
