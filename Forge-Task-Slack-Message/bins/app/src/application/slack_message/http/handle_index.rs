use actix_web::http::StatusCode;
use actix_web::{Error, HttpResponse};

pub async fn index() -> Result<HttpResponse, Error> {
    Ok(HttpResponse::build(StatusCode::OK)
        .content_type("text/html; charset+utf-8")
        .body(include_str!("../../templates/index.html")))
}
