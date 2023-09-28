use async_trait::async_trait;
use error::Error;
use mockall::automock;
use support::store::models::{action_token::ActionToken, user::User};

#[automock]
#[async_trait]
pub trait AuthContract {
    async fn verify_email(&self, token: &str) -> Result<(String, String), Error>;
    async fn login(&self, email: &str, password: &str) -> Result<(String, String), Error>;
    async fn logout(&self, id: &str) -> Result<(), Error>;
    async fn access_from_refresh(&self, refresh_token: &str) -> Result<String, Error>;
}

#[automock]
#[async_trait]
pub trait PgServiceContract {
    async fn update_token(&self, token: &str, action_name: &str) -> Result<ActionToken, Error>;
    async fn update_user(&self, user: &User) -> Result<User, Error>;
    async fn update_refresh_token(&self, id: &str, refresh_token: &str) -> Result<User, Error>;
    async fn set_refresh_token_null(&self, id: &str) -> Result<User, Error>;
}

#[automock]
#[async_trait]
pub trait PgRepositoryContract {
    async fn find_by_token(&self, token: &str) -> Result<ActionToken, Error>;
    async fn find_user_by_id(&self, id: &str) -> Result<User, Error>;
    async fn find_user_by_email(&self, email: &str) -> Result<User, Error>;
    async fn find_user_by_refresh_token(&self, refresh_token: &str) -> Result<User, Error>;
}
