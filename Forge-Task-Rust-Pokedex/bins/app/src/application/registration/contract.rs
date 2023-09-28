use super::data::*;
use async_trait::async_trait;
use error::Error;
use support::store::models::{action_token::ActionToken, user::User};

#[async_trait]
pub trait RegistrationContract {
    async fn create_user(&self, new_user: UserData, base_url: String) -> Result<String, Error>;
    async fn resend_email(&self, email: &str, base_url: String) -> Result<String, Error>;
}

#[async_trait]
pub trait PgServiceContract {
    async fn insert_user(&self, new_user: UserData) -> Result<User, Error>;
    async fn insert_action_token(
        &self,
        id: String,
        entity_id: &str,
        action_name: &str,
    ) -> Result<(), Error>;
    async fn update_token(&self, token: &str, action_name: &str) -> Result<ActionToken, Error>;
    async fn update_user(&self, user: &User) -> Result<User, Error>;
}

#[async_trait]
pub trait PgRepositoryContract {
    async fn find_by_token(&self, token: &str) -> Result<ActionToken, Error>;
    async fn find_user_by_id(&self, id: &str) -> Result<User, Error>;
    async fn find_user_by_email(&self, email: &str) -> Result<User, Error>;
}
