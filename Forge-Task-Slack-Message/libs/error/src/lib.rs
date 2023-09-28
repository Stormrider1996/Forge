use actix_web::{HttpResponse, ResponseError};
use diesel::result::Error as DieselError;
use r2d2::Error as R2D2Error;
use reqwest::Error as ReqError;
use std::{convert::From, fmt};
use validr::error::ValidationErrors;

#[allow(clippy::enum_variant_names)]
#[derive(Debug)]
pub enum Error {
    Diesel(DieselError),
    R2D2Error(R2D2Error),
    NotFound,
    NotFoundWithCause(String),
    BadRequest(String),
    Req(String),
    Validation(ValidationErrors),
    InternalServerError(String),
    InternalError(String),
}

// Allow the use of "{}" format specifier
impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Error::Diesel(ref cause) => write!(f, "DB Error: {cause}"),
            Error::R2D2Error(ref cause) => write!(f, "DB Pool Error: {cause}"),
            Error::NotFound => write!(f, "Not Found"),
            Error::NotFoundWithCause(ref cause) => write!(f, "Not found: {cause}"),
            Error::BadRequest(ref cause) => write!(f, "Bad request: {cause}"),
            Error::Req(ref cause) => write!(f, "Request error: {cause}"),
            Error::Validation(ref cause) => {
                write!(f, "Validation error: {cause}")
            }
            Error::InternalServerError(ref cause) => write!(f, "{cause}"),
            Error::InternalError(ref cause) => write!(f, "{cause}"),
        }
    }
}

impl From<ReqError> for Error {
    fn from(cause: ReqError) -> Error {
        let url = match cause.url() {
            Some(url) => url.as_str(),
            None => "n/a",
        };
        let source = match std::error::Error::source(&cause) {
            Some(error) => error.to_string(),
            None => "n/a".to_string(),
        };
        let error = format!("Error: {url} - {source}");
        Error::Req(error)
    }
}

impl From<HttpResponse> for Error {
    fn from(response: HttpResponse) -> Self {
        Error::BadRequest(format!("Actix Web Error: {:?}", response))
    }
}

impl From<DieselError> for Error {
    fn from(cause: DieselError) -> Error {
        if cause == DieselError::NotFound {
            return Error::NotFound;
        }
        Error::Diesel(cause)
    }
}

impl From<R2D2Error> for Error {
    fn from(cause: R2D2Error) -> Error {
        Error::R2D2Error(cause)
    }
}

impl From<ValidationErrors> for Error {
    fn from(cause: ValidationErrors) -> Error {
        Error::Validation(cause)
    }
}

impl ResponseError for Error {
    fn error_response(&self) -> HttpResponse {
        let mut response = match self {
            Error::NotFound => HttpResponse::NotFound(),
            Error::NotFoundWithCause(_) => HttpResponse::NotFound(),
            Error::Validation(_) => HttpResponse::BadRequest(),
            Error::InternalError(_) => HttpResponse::InternalServerError(),
            Error::R2D2Error(_) => HttpResponse::GatewayTimeout(),
            _ => HttpResponse::InternalServerError(),
        };

        response.json(self.into_error_body())
    }
}

impl Error {
    pub fn is_validation(&self) -> bool {
        matches!(self, Error::Validation(_))
    }

    pub fn into_value(self) -> serde_json::Value {
        serde_json::to_value(self.into_error_body()).unwrap_or(serde_json::Value::Null)
    }

    pub fn into_error_body(&self) -> ErrorBody {
        match *self {
            Error::Diesel(ref cause) => ErrorBody {
                message: Some("DB Error".to_string()),
                code: "db".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::R2D2Error(ref cause) => ErrorBody {
                message: Some("DB Pool Error".to_string()),
                code: "no_connections_available".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::BadRequest(ref cause) => ErrorBody {
                message: Some("Bad request".to_string()),
                code: "general".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::Req(ref cause) => ErrorBody {
                message: Some("Request error".to_string()),
                code: "broken_outbound_request".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::NotFound => ErrorBody {
                message: Some("Entity not found".to_string()),
                code: "not_found".to_string(),
                cause: None,
                payload: None,
            },
            Error::NotFoundWithCause(ref cause) => ErrorBody {
                message: Some("Entity not found".to_string()),
                code: "not_found".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            // Error::Validation(ref cause) => // This one will never have error body, so if you require body, you'll get default 500 error,
            Error::Validation(ref errors) => ErrorBody {
                message: Some("invalid-body".to_owned()),
                code: 400.to_string(),
                cause: Some("invalid-body".to_owned()),
                payload: Some(serde_json::to_value(errors.get_errors()).unwrap()),
            },
            Error::InternalServerError(ref cause) => ErrorBody {
                message: Some("Internal server error".to_string()),
                code: 500.to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::InternalError(ref cause) => ErrorBody {
                message: Some("Internal error".to_string()),
                code: 500.to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
        }
    }
}

#[derive(serde::Serialize, serde::Deserialize, Debug)]
pub struct ErrorBody {
    pub message: Option<String>,
    pub code: String,
    pub cause: Option<String>,
    pub payload: Option<serde_json::Value>,
}
