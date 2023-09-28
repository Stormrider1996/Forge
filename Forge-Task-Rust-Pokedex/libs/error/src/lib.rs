use actix_session::SessionInsertError as SessionError;
use actix_web::cookie::ParseError;
use actix_web::error::HttpError;
use actix_web::{HttpResponse, ResponseError};
use bcrypt::BcryptError;
use crypto_common::InvalidLength;
use diesel::result::Error as DieselError;
use jsonwebtoken::errors::Error as JwtError;
use lettre::address::AddressError;
use lettre::error::Error as LettreBodyError;
use lettre::transport::smtp::Error as LettreError;
use r2d2::Error as R2D2Error;
use reqwest::Error as ReqError;
use serde_json::Error as SerdeJsonError;
use std::{convert::From, error::Error as StdError, fmt, io::Error as IoError};
use validr::error::ValidationErrors;

#[allow(clippy::enum_variant_names)]
#[derive(Debug)]
pub enum Error {
    Timeout(String),
    Diesel(DieselError),
    R2D2Error(R2D2Error),
    Io(String),
    BadRequest(String),
    PayloadTooLarge(String),
    Unauthorized(String),
    Forbidden(String),
    Jwt,
    Req(String),
    NotFound,
    NotFoundWithCause(String),
    SerdeJson,
    Other,
    TooManyRequests(String),
    InternalError(String),
    Validation(ValidationErrors),
    Bcrypt(BcryptError),
    Lettre(LettreError),
    Address(AddressError),
    LettreBody(LettreBodyError),
    ParseError(ParseError),
    HttpError(HttpError),
    Hmac(InvalidLength),
    JwtError(JwtError),
    ActixSessionError(SessionError),
}

// Allow the use of "{}" format specifier
impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            Error::Timeout(ref cause) => write!(f, "Timedout waiting for the condition: {}", cause),
            Error::Diesel(ref cause) => write!(f, "DB Error: {}", cause),
            Error::R2D2Error(ref cause) => write!(f, "DB Pool Error: {}", cause),
            Error::Io(ref cause) => write!(f, "Io Error: {}", cause),
            Error::BadRequest(ref cause) => write!(f, "Bad request: {}", cause),
            Error::PayloadTooLarge(ref cause) => write!(f, "Payload too large: {}", cause),
            Error::Unauthorized(ref cause) => write!(f, "Authorization error: {}", cause),
            Error::Forbidden(ref cause) => write!(f, "Forbidden error: {}", cause),
            Error::Jwt => write!(f, "Jwt verify error"),
            Error::Req(ref cause) => write!(f, "Request error: {}", cause),
            Error::NotFound => write!(f, "Not Found"),
            Error::NotFoundWithCause(ref cause) => write!(f, "Not found: {}", cause),
            Error::SerdeJson => write!(f, "Parsing JSON error"),
            Error::Other => write!(f, "Oops, something went wrong"),
            Error::TooManyRequests(ref error_time) => {
                write!(f, "Too many requests, retry in {}s", error_time)
            }
            Error::InternalError(ref cause) => write!(f, "{}", cause),
            Error::Validation(ref cause) => {
                write!(f, "Validation error: {cause}")
            }
            Error::Bcrypt(ref cause) => write!(f, "Bcrypt error: {}", cause),
            Error::Lettre(ref cause) => write!(f, "Lettre error: {}", cause),
            Error::Address(ref cause) => write!(f, "Address error: {}", cause),
            Error::LettreBody(ref cause) => write!(f, "Lettre body error: {}", cause),
            Error::ParseError(ref cause) => write!(f, "Parse error: {}", cause),
            Error::HttpError(ref cause) => write!(f, "Http error: {}", cause),
            Error::Hmac(ref cause) => write!(f, "Hmac error: {}", cause),
            Error::JwtError(ref cause) => write!(f, "Jwt error: {}", cause),
            Error::ActixSessionError(ref cause) => write!(f, "Actix session error: {}", cause),
        }
    }
}

impl StdError for Error {
    fn cause(&self) -> Option<&dyn StdError> {
        match *self {
            Error::Timeout(ref _cause) => None,
            Error::Diesel(ref cause) => Some(cause),
            Error::R2D2Error(ref cause) => Some(cause),
            Error::Io(ref _cause) => None,
            Error::BadRequest(ref _cause) => None,
            Error::PayloadTooLarge(ref _cause) => None,
            Error::Unauthorized(ref _cause) => None,
            Error::Forbidden(ref _cause) => None,
            Error::Jwt => None,
            Error::Req(ref _cause) => None,
            Error::NotFound => None,
            Error::NotFoundWithCause(ref _cause) => None,
            Error::SerdeJson => None,
            Error::Other => None,
            Error::TooManyRequests(ref _error_time) => None,
            Error::InternalError(ref _cause) => None,
            Error::Validation(ref cause) => Some(cause),
            Error::Bcrypt(ref cause) => Some(cause),
            Error::Lettre(ref cause) => Some(cause),
            Error::Address(ref cause) => Some(cause),
            Error::LettreBody(ref cause) => Some(cause),
            Error::ParseError(ref cause) => Some(cause),
            Error::HttpError(ref cause) => Some(cause),
            Error::Hmac(ref cause) => Some(cause),
            Error::JwtError(ref cause) => Some(cause),
            Error::ActixSessionError(ref cause) => Some(cause),
        }
    }
}

impl From<IoError> for Error {
    fn from(cause: IoError) -> Error {
        Error::Io(format!("{:?}", cause))
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

impl From<SerdeJsonError> for Error {
    fn from(_cause: SerdeJsonError) -> Error {
        Error::SerdeJson
    }
}

impl From<ReqError> for Error {
    fn from(cause: ReqError) -> Error {
        let url = match cause.url() {
            Some(url) => url.as_str(),
            None => "n/a",
        };
        let source = match cause.source() {
            Some(error) => error.to_string(),
            None => "n/a".to_string(),
        };
        let error = format!("Error: {} - {}", url, source);
        Error::Req(error)
    }
}

impl From<ValidationErrors> for Error {
    fn from(cause: ValidationErrors) -> Error {
        Error::Validation(cause)
    }
}

impl From<BcryptError> for Error {
    // define how to convert a BcryptError into an Error
    fn from(error: BcryptError) -> Self {
        // use the InternalError variant to wrap the BcryptError message
        Error::InternalError(error.to_string())
    }
}

impl From<LettreError> for Error {
    fn from(cause: LettreError) -> Self {
        Error::Lettre(cause) // return the new variant
    }
}
impl From<AddressError> for Error {
    fn from(cause: AddressError) -> Self {
        Error::Address(cause) // return the address variant
    }
}
// Implement the From trait for the lettre body error
impl From<LettreBodyError> for Error {
    fn from(cause: LettreBodyError) -> Self {
        Error::LettreBody(cause) // return the lettre body variant
    }
}
impl From<ParseError> for Error {
    fn from(cause: ParseError) -> Self {
        Error::ParseError(cause) // return the parse error variant
    }
}
impl From<HttpError> for Error {
    fn from(cause: HttpError) -> Self {
        Error::HttpError(cause) // return the http error variant
    }
}
impl From<InvalidLength> for Error {
    fn from(cause: InvalidLength) -> Self {
        Error::Hmac(cause) // return the hmac error variant
    }
}
impl From<JwtError> for Error {
    fn from(cause: JwtError) -> Self {
        Error::JwtError(cause) // return the jwt error variant
    }
}
impl From<SessionError> for Error {
    fn from(cause: SessionError) -> Self {
        Error::ActixSessionError(cause) // return the actix session error variant
    }
}

impl ResponseError for Error {
    fn error_response(&self) -> HttpResponse {
        let mut response = match self {
            Error::PayloadTooLarge(_) => HttpResponse::PayloadTooLarge(),
            Error::Forbidden(_) => HttpResponse::Forbidden(),
            Error::NotFound => HttpResponse::NotFound(),
            Error::NotFoundWithCause(_) => HttpResponse::NotFound(),
            Error::Validation(_) => HttpResponse::BadRequest(),
            Error::Timeout(_) => HttpResponse::RequestTimeout(),
            Error::TooManyRequests(ref error_time) => {
                return HttpResponse::TooManyRequests()
                    .insert_header((actix_web::http::header::RETRY_AFTER, error_time.clone()))
                    .json(self.into_error_body());
            }
            Error::BadRequest(_) => HttpResponse::BadRequest(),
            _ => HttpResponse::InternalServerError(),
        };

        response.json(self.into_error_body())
    }
}

impl Error {
    pub fn add_cause_if_not_found(self, cause: &str) -> Error {
        match &self {
            Error::NotFound => Error::NotFoundWithCause(cause.to_string()),
            Error::NotFoundWithCause(_) => Error::NotFoundWithCause(cause.to_string()),
            _ => self,
        }
    }

    pub fn is_validation(&self) -> bool {
        matches!(self, Error::Validation(_))
    }

    pub fn is_not_found(&self) -> bool {
        matches!(self, Error::NotFound | Error::NotFoundWithCause(_))
    }

    pub fn into_value(self) -> serde_json::Value {
        serde_json::to_value(self.into_error_body()).unwrap_or(serde_json::Value::Null)
    }

    pub fn into_error_body(&self) -> ErrorBody {
        match *self {
            Error::Timeout(ref cause) => ErrorBody {
                message: Some("Timeout while waiting for the condition".to_string()),
                code: "timeout".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
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
            Error::Io(ref cause) => ErrorBody {
                message: Some("Io Error".to_string()),
                code: "io".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::BadRequest(ref cause) => ErrorBody {
                message: Some("Bad request".to_string()),
                code: "general".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::PayloadTooLarge(ref cause) => ErrorBody {
                message: Some("Payload too large".to_string()),
                code: "upload".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::Unauthorized(ref cause) => ErrorBody {
                message: Some("Unauthorized error".to_string()),
                code: "unauthorized".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::Forbidden(ref cause) => ErrorBody {
                message: Some("Forbidden error".to_string()),
                code: "forbidden".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::Jwt => ErrorBody {
                message: Some("JWT authorization error".to_string()),
                code: "jwt".to_string(),
                cause: None,
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
            Error::SerdeJson => ErrorBody {
                message: Some("JSON error".to_string()),
                code: "json".to_string(),
                cause: None,
                payload: None,
            },
            Error::TooManyRequests(ref error_time) => ErrorBody {
                message: Some(format!("Too many requests, retry in {}s", error_time)),
                code: "chill_out".to_string(),
                cause: None,
                payload: None,
            },
            Error::Validation(ref errors) => ErrorBody {
                message: Some("invalid-body".to_owned()),
                code: 400.to_string(),
                cause: Some("invalid-body".to_owned()),
                payload: Some(serde_json::to_value(errors.get_errors()).unwrap()),
            },
            Error::Bcrypt(ref cause) => ErrorBody {
                message: Some("Bcrypt error".to_string()),
                code: "bcrypt".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::Lettre(ref cause) => ErrorBody {
                message: Some("Lettre error".to_string()),
                code: "lettre".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::Address(ref cause) => ErrorBody {
                message: Some("Address error".to_string()),
                code: "address".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::LettreBody(ref cause) => ErrorBody {
                message: Some("Lettre body error".to_string()),
                code: "address".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::ParseError(ref cause) => ErrorBody {
                message: Some("Parse error".to_string()),
                code: "parse".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::HttpError(ref cause) => ErrorBody {
                message: Some("Http error".to_string()),
                code: "http".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            Error::ActixSessionError(ref cause) => ErrorBody {
                message: Some("Actix session error".to_string()),
                code: "actix_session".to_string(),
                cause: Some(cause.to_string()),
                payload: None,
            },
            _ => ErrorBody {
                message: Some("Something went wrong".to_string()),
                code: "server_error".to_string(),
                cause: None,
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
