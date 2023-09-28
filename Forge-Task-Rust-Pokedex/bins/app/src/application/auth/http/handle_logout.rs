use super::super::contract::AuthContract;
use actix_web::{cookie::Cookie, web, HttpRequest, HttpResponse};
use cookie::time;
use error::Error;
use support::helpers::http::get_api_version;

pub async fn handle_logout<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_logout_v1(request, service).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_logout_v1<T: AuthContract>(
    request: HttpRequest,
    service: web::Data<T>,
) -> Result<HttpResponse, Error> {
    let cookie = request.cookie("refresh_token");
    let refresh_token = match cookie {
        Some(ref cookie) => cookie.value().to_string(),
        None => return Err(Error::Unauthorized("Unauthorized".to_string())),
    };
    service.logout(&refresh_token).await?;

    let removal_cookie = Cookie::build("refresh_token", "")
        .path("/")
        .max_age(time::Duration::days(0))
        .finish();

    Ok(HttpResponse::Ok().cookie(removal_cookie).finish())
}
