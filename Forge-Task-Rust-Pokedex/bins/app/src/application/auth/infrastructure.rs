use super::contract::PgRepositoryContract;
use super::contract::PgServiceContract;
use async_trait::async_trait;
use error::Error;
use infrastructure::db::Pg;
use std::sync::Arc;
use support::store::models::action_token::ActionToken;
use support::store::models::user::User;

pub struct PgService {
    pub pg_pool: Arc<Pg>,
}

#[async_trait]
impl PgServiceContract for PgService {
    // Update token status in the database
    async fn update_token(&self, token: &str, action_name: &str) -> Result<ActionToken, Error> {
        let mut conn = self.pg_pool.connection()?;

        let token = ActionToken::find_by_token(&mut conn, token)?;

        let updated_token = ActionToken::update_token(&mut conn, &token.token, action_name)?;

        Ok(updated_token)
    }

    // Update user information in the database
    async fn update_user(&self, user: &User) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;

        User::update_user(&mut conn, user)
    }

    // Update user refresh token in the database
    async fn update_refresh_token(&self, id: &str, refresh_token: &str) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;

        User::update_refresh_token(&mut conn, id, refresh_token)
    }

    // Set user refresh token to null in the database
    async fn set_refresh_token_null(&self, id: &str) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;

        User::set_refresh_token_null(&mut conn, id)
    }
}

pub struct PgRepository {
    pub pg_pool: Arc<Pg>,
}

#[async_trait]
impl PgRepositoryContract for PgRepository {
    // Find a user by their ID in the database
    async fn find_user_by_id(&self, id: &str) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;
        User::find_user_by_id(&mut conn, id)
    }
    // Find an action token by its token value in the database
    async fn find_by_token(&self, token: &str) -> Result<ActionToken, Error> {
        let mut conn = self.pg_pool.connection()?;
        ActionToken::find_by_token(&mut conn, token)
    }
    // Find a user by their email in the database
    async fn find_user_by_email(&self, email: &str) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;
        User::find_user_by_email(&mut conn, email)
    }
    // Find a user by their refresh token in the database
    async fn find_user_by_refresh_token(&self, refresh_token: &str) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;
        User::find_user_by_refresh_token(&mut conn, refresh_token)
    }
}
