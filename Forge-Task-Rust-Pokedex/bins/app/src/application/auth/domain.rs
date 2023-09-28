use super::contract::{AuthContract, PgRepositoryContract, PgServiceContract};
use async_trait::async_trait;
use chrono::Utc;
use error::Error;
use support::helpers::auth::{
    generate_jwt_access_token, generate_jwt_refresh_token, verify_refresh_token,
};

pub struct Auth<A: PgRepositoryContract, B: PgServiceContract> {
    pub repository: A,
    pub service: B,
}

#[async_trait]
impl<A, B> AuthContract for Auth<A, B>
where
    A: PgRepositoryContract + Send + Sync,
    B: PgServiceContract + Send + Sync,
{
    // Verify email using the provided token
    async fn verify_email(&self, token: &str) -> Result<(String, String), Error> {
        let token = self.repository.find_by_token(token).await?;

        match token.is_expired() {
            true => {
                self.service
                    .update_token(token.token.as_str(), "expired")
                    .await?;
                Err(Error::BadRequest("Token has expired".to_string()))
            }
            false => {
                self.service
                    .update_token(token.token.as_str(), "verified")
                    .await?;

                let mut user = self.repository.find_user_by_id(&token.entity_id).await?;
                if user.verified_at.is_some() {
                    return Err(Error::BadRequest(
                        "Email has already been verified".to_string(),
                    ));
                }
                user.verified_at = Some(Utc::now());
                self.service.update_user(&user).await?;
                let access_token = generate_jwt_access_token(&user.id);
                let refresh_token = generate_jwt_refresh_token(&user.id);
                self.service
                    .update_refresh_token(&user.id, &refresh_token)
                    .await?;

                Ok((access_token, refresh_token))
            }
        }
    }

    // Login using the provided email and password
    async fn login(&self, email: &str, password: &str) -> Result<(String, String), Error> {
        let user = self.repository.find_user_by_email(email).await?;
        if user.verified_at.is_none() {
            return Err(Error::BadRequest("Email not verified".to_string()));
        }
        match bcrypt::verify(password.as_bytes(), user.password.as_str()) {
            Ok(true) => {
                let access_token = generate_jwt_access_token(&user.id);
                let refresh_token = generate_jwt_refresh_token(&user.id);
                self.service
                    .update_refresh_token(&user.id, &refresh_token)
                    .await?;

                Ok((access_token, refresh_token))
            }
            Ok(false) => Err(Error::BadRequest("Invalid credentials".to_string())),
            Err(_) => Err(Error::InternalError(
                "Bcrypt verification error".to_string(),
            )),
        }
    }

    // Logout the user
    async fn logout(&self, refresh_token: &str) -> Result<(), Error> {
        let claims = verify_refresh_token(refresh_token).await?;
        if claims.exp < Utc::now().timestamp() {
            return Err(Error::BadRequest("Token has expired".to_string()));
        }
        let user_id = claims.sub;
        self.service.set_refresh_token_null(&user_id).await?;
        Ok(())
    }

    // Get access token from refresh token
    async fn access_from_refresh(&self, refresh_token: &str) -> Result<String, Error> {
        let claims = verify_refresh_token(refresh_token).await?;
        if claims.exp < Utc::now().timestamp() {
            return Err(Error::BadRequest("Token has expired".to_string()));
        }
        let user_id = claims.sub;
        let access_token = generate_jwt_access_token(&user_id);
        Ok(access_token)
    }
}
