/* use super::super::contract::*; */
use crate::application::slack_message::{
    contract::SlackMessageContract, data::RequestSlackMessageData,
};
use actix_web::{web, HttpRequest, HttpResponse};
use error::Error;
use support::helpers::http::get_api_version;
use validr::Validation;

pub async fn handle_create<T: SlackMessageContract>(
    request: HttpRequest,
    service: web::Data<T>,
    data: web::Json<RequestSlackMessageData>,
) -> Result<HttpResponse, Error> {
    match get_api_version(&request).as_ref() {
        "v1" => handle_create_v1(service, data).await,
        _ => Err(Error::NotFound),
    }
}

async fn handle_create_v1<T: SlackMessageContract>(
    service: web::Data<T>,
    data: web::Json<RequestSlackMessageData>,
) -> Result<HttpResponse, Error> {
    let data = data.into_inner().validate()?.insertable();
    service.create(data.clone()).await?;

    Ok(HttpResponse::Created().finish())
}
