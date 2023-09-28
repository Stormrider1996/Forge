use actix_web::HttpRequest;

/// Get api version from the route path
pub fn get_api_version(req: &HttpRequest) -> String {
    match req.match_info().get("version") {
        Some(value) => value.parse().unwrap_or_else(|_| "v1".to_string()),
        None => "v1".to_string(),
    }
}
