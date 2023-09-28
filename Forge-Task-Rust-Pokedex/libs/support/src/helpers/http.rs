use std::str::FromStr;

use actix_web::{HttpMessage, HttpRequest};
use error::Error;

/// Get api version from the route path
pub fn get_api_version(req: &HttpRequest) -> String {
    match req.match_info().get("version") {
        Some(value) => value.parse().unwrap_or_else(|_| "v1".to_string()),
        None => "v1".to_string(),
    }
}

/// Parse given parameter easily from the request path string
pub fn part_from_path<T: FromStr>(req: &HttpRequest, name: &str) -> Result<T, Error> {
    let value: T = match req.match_info().get(name) {
        Some(val) => match val.parse() {
            Ok(v) => v,
            Err(_) => return Err(Error::BadRequest(format!("path_attribute_missing:{name}"))),
        },
        None => return Err(Error::BadRequest(format!("path_attribute_missing:{name}"))),
    };

    Ok(value)
}

/// Get base_url
/// if DEV env get base_url from Origin header
pub fn get_base_url(req: &HttpRequest) -> String {
    let mut base_url = match &config::get_default("IS_DEV", "")[..] {
        "true" => get_header_origin(req),
        _ => config::get_default("WEBSITE_BASE_URL", ""),
    };

    if base_url.ends_with('/') {
        let _ = base_url.pop();
    }

    base_url
}

/// Get origin header from request or if missing, return from config
pub fn get_header_origin(req: &HttpRequest) -> String {
    let mut base_url = match part_from_header(req, "host") {
        Ok(header) => header,
        Err(_) => config::get_default("WEBSITE_BASE_URL", ""),
    };

    if base_url.ends_with('/') {
        let _ = base_url.pop();
    }

    base_url
}

/// Helper function that will get given parameter easily from the request header
pub fn part_from_header(req: &HttpRequest, name: &str) -> Result<String, Error> {
    let value = match req.headers().get(name) {
        Some(val) => match val.to_str().ok() {
            Some(v) => v,
            None => {
                return Err(Error::BadRequest(format!(
                    "header_attribute_missing:{name}"
                )))
            }
        },
        None => {
            return Err(Error::BadRequest(format!(
                "header_attribute_missing:{name}"
            )))
        }
    };

    Ok(value.to_string())
}

/// Fetch user id for auth header
pub fn get_user_id_from_auth_header(req: &HttpRequest) -> Result<String, Error> {
    match req.extensions().get::<String>() {
        Some(user_id) => Ok(user_id.clone()),
        None => Err(Error::Unauthorized("user not authorized".to_string())),
    }
}
