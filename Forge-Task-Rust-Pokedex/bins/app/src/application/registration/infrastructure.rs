use super::contract::PgRepositoryContract;
use super::{contract::PgServiceContract, data::UserData};
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
    // Insert a new user into the database
    async fn insert_user(&self, data: UserData) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;

        UserData::insert_new_user(&mut conn, &data)
    }

    // Insert an action token into the database
    async fn insert_action_token(
        &self,
        id: String,
        token: &str,
        action_name: &str,
    ) -> Result<(), Error> {
        let mut conn = self.pg_pool.connection()?;

        ActionToken::create_action_token(&mut conn, id, token, action_name)?;

        Ok(())
    }

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

    // Find a user by their email in the database
    async fn find_user_by_email(&self, email: &str) -> Result<User, Error> {
        let mut conn = self.pg_pool.connection()?;
        User::find_user_by_email(&mut conn, email)
    }

    // Find an action token by its token value in the database
    async fn find_by_token(&self, token: &str) -> Result<ActionToken, Error> {
        let mut conn = self.pg_pool.connection()?;
        ActionToken::find_by_token(&mut conn, token)
    }
}
