use super::data::RequestSlackMessageData;
use actix_web::{http, web, HttpResponse, ResponseError};
use validr::*;

async fn test_actix_route_handler_slack_message_attributes(
    test: web::Json<RequestSlackMessageData>,
) -> HttpResponse {
    match test.into_inner().validate() {
        Ok(item) => {
            println!("This is your data validated and modified: {:#?}", item);
            HttpResponse::Ok().body("Validation passed!")
        }
        Err(e) => e.error_response(),
    }
}

#[actix_web::main]
#[test]
async fn test_slack_message_attributes_success() {
    let data = RequestSlackMessageData {
        name: Some("name".to_string()),
        channel: Some("U04RUKK1P0F".to_string()),
        icon_emoji: Some("ghost".to_string()),
        message: Some("test".to_string()),
    };

    let response = test_actix_route_handler_slack_message_attributes(web::Json(data)).await;

    assert_eq!(response.status(), http::StatusCode::OK)
}

#[actix_web::main]
#[test]
async fn test_slack_message_attributes_with_none() {
    let data = RequestSlackMessageData {
        name: None,
        channel: None,
        icon_emoji: None,
        message: None,
    };

    let response = test_actix_route_handler_slack_message_attributes(web::Json(data)).await;

    assert_eq!(response.status(), http::StatusCode::UNPROCESSABLE_ENTITY)
}
