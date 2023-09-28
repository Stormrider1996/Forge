use actix_web::{http, web, HttpResponse, ResponseError};
use validr::Validation;

use crate::application::api::data::RequestGuessData;

async fn test_actix_route_handler_user_attributes(
    test: web::Json<RequestGuessData>,
) -> HttpResponse {
    match test.into_inner().validate() {
        Ok(item) => {
            println!("This is your data validated and modified: {:#?}", item);
            HttpResponse::Ok().body("Validation passed!")
        }
        Err(e) => e.error_response(),
    }
}

#[tokio::test]
async fn test_user_attributes_success() {
    let data = RequestGuessData {
        guess: Some("test".to_string()),
    };
    let response = test_actix_route_handler_user_attributes(web::Json(data)).await;

    assert_eq!(response.status(), http::StatusCode::OK)
}

#[tokio::test]
async fn test_user_attributes_none() {
    let data = RequestGuessData { guess: None };
    let response = test_actix_route_handler_user_attributes(web::Json(data)).await;

    assert_eq!(response.status(), http::StatusCode::UNPROCESSABLE_ENTITY)
}
