use error::Error;

use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};

use serde::{Deserialize, Serialize};

use std::env;

// Generate a JWT access token
pub fn generate_jwt_access_token(subject: &str) -> String {
    let now = chrono::Utc::now();
    let expiration = now + chrono::Duration::hours(1);

    let claims = Claims {
        sub: subject.to_owned(),
        exp: expiration.timestamp(),
    };

    let secret_key = env::var("JWT_ACCESS_SECRET_KEY").expect("JWT_ACCESS_SECRET_KEY must be set");
    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(secret_key.as_bytes()),
    )
    .expect("Failed to generate JWT access token")
}

// Generate a JWT refresh token
pub fn generate_jwt_refresh_token(subject: &str) -> String {
    let now = chrono::Utc::now();
    let expiration = now + chrono::Duration::days(7);

    let claims = Claims {
        sub: subject.to_owned(),
        exp: expiration.timestamp(),
    };

    let secret_key =
        env::var("JWT_REFRESH_SECRET_KEY").expect("JWT_REFRESH_SECRET_KEY must be set");

    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(secret_key.as_bytes()),
    )
    .expect("Failed to generate JWT refresh token")
}

pub async fn verify_refresh_token(token: &str) -> Result<Claims, Error> {
    //get the refresh token secret from the environment
    let refresh_token_secret =
        env::var("JWT_REFRESH_SECRET_KEY").expect("REFRESH_TOKEN_SECRET must be set");

    //decode the token and get the claims
    let refresh_token_claims = decode::<Claims>(
        token,
        &DecodingKey::from_secret(refresh_token_secret.as_bytes()),
        &Validation::default(),
    )
    .map_err(Error::from)?
    .claims;

    //return the claims as a BTreeMap
    Ok(refresh_token_claims)
}

pub fn verify_access_token(token: &str) -> Result<Claims, Error> {
    //get the refresh token secret from the environment
    let access_token_secret =
        env::var("JWT_ACCESS_SECRET_KEY").expect("REFRESH_ACCESS_SECRET must be set");

    //decode the token and get the claims
    let access_token_claims = decode::<Claims>(
        token,
        &DecodingKey::from_secret(access_token_secret.as_bytes()),
        &Validation::default(),
    )
    .map_err(Error::from)?
    .claims;

    //return the claims as a BTreeMap
    Ok(access_token_claims)
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub sub: String, // Subject (usually user ID)
    pub exp: i64,    // Expiration time in UTC (Unix timestamp)
}
