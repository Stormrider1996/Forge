use super::super::contract::RegistrationContract;
use super::super::data::RequestUserData;
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::{get_api_version, get_base_url};
use validr::Validation;

pub async fn handle_create<T: RegistrationContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<RequestUserData>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_create_v1(request, service, data).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_create_v1<T: RegistrationContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<RequestUserData>,
) -> Result<HttpResponse, Error> {
    let data = data.into_inner().validate()?.insertable();
    let base_url = get_base_url(&request);
    let token = service.create_user(data?, base_url).await?;

    Ok(match &config::get_default("IS_DEV", "")[..] {
        "true" => HttpResponse::Created()
            .insert_header(("activate-token", token))
            .json("Email verification sent"),
        _ => HttpResponse::Created().json("Email verification sent"),
    })
}
