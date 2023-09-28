use crate::application::auth::data::{RequestLoginData, ResponseLoginData};

use super::super::contract::AuthContract;
use actix_web::{cookie::Cookie, web, HttpRequest, HttpResponse};
use cookie::time;
use error::Error;
use support::helpers::http::get_api_version;
use validr::Validation;

pub async fn handle_login<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<RequestLoginData>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_login_v1(service, data).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_login_v1<T: AuthContract>(
    service: web::Data<T>,
    data: web::Json<RequestLoginData>,
) -> Result<HttpResponse, Error> {
    let data = data.into_inner().validate()?;
    let login_data = service
        .login(&data.email.unwrap(), &data.password.unwrap())
        .await?;
    let response = ResponseLoginData::new(login_data.0);
    let cookie = Cookie::build("refresh_token", login_data.1)
        .max_age(time::Duration::days(30))
        .path("/")
        .finish();

    Ok(HttpResponse::Ok().cookie(cookie).json(response))
}
