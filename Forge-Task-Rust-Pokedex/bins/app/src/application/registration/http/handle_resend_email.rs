use super::super::contract::RegistrationContract;
use super::super::data::ResendEmailReqData;
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::{get_api_version, get_base_url};
use validr::Validation;

pub async fn handle_resend_email<T: RegistrationContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<ResendEmailReqData>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_resend_email_v1(request, service, data).await,
        _ => Err(Error::NotFound),
    }
}

pub async fn handle_resend_email_v1<T: RegistrationContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<ResendEmailReqData>,
) -> Result<HttpResponse, Error> {
    let data = data.into_inner().validate()?;
    let base_url = get_base_url(&request);
    let token = service.resend_email(&data.email.unwrap(), base_url).await?;

    Ok(match &config::get_default("IS_DEV", "")[..] {
        "true" => HttpResponse::Ok()
            .insert_header(("activate-token", token))
            .json("Email verification sent"),
        _ => HttpResponse::Ok().json("Email verification sent"),
    })
}
