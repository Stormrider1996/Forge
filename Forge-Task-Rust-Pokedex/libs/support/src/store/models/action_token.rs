use chrono::{DateTime, Duration, Utc};
use diesel::prelude::Identifiable;
use diesel::ExpressionMethods;
use diesel::{Insertable, QueryDsl, Queryable, RunQueryDsl};
use error::Error;
use infrastructure::{db::DbConnection, schema::token_actions};
use rand::distributions::Alphanumeric;
use rand::{thread_rng, Rng};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(
    Debug, Clone, PartialEq, Eq, Insertable, Deserialize, Serialize, Queryable, Identifiable,
)]
#[diesel(table_name = token_actions)]
#[diesel(treat_none_as_null = true)]
pub struct ActionToken {
    pub id: String,
    pub entity_id: String,
    pub token: String,
    pub action_name: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
    pub executed_at: Option<DateTime<Utc>>,
    pub expires_at: Option<DateTime<Utc>>,
}

impl ActionToken {
    // Create a new action token and insert it into the database
    pub fn create_action_token(
        conn: &mut DbConnection,
        entity_id: String,
        token: &str,
        action_name: &str,
    ) -> Result<ActionToken, Error> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();
        let expires_at = now + Duration::minutes(10);

        let action_token = ActionToken {
            id,
            entity_id,
            token: token.to_string(),
            action_name: action_name.to_string(),
            created_at: now,
            updated_at: now,
            executed_at: None,
            expires_at: Some(expires_at),
        };

        diesel::insert_into(token_actions::table)
            .values(&action_token)
            .execute(conn)?;

        Ok(action_token)
    }

    // Generate a random token of the given length
    pub fn generate_token(length: usize) -> String {
        thread_rng()
            .sample_iter(&Alphanumeric)
            .take(length)
            .map(char::from)
            .collect()
    }

    // Find an action token by its token field
    pub fn find_by_token(conn: &mut DbConnection, token: &str) -> Result<ActionToken, Error> {
        let action_token = token_actions::table
            .filter(token_actions::token.eq(token))
            .first::<ActionToken>(conn)?;

        Ok(action_token)
    }

    // Check if the action token has expired
    pub fn is_expired(&self) -> bool {
        match self.expires_at {
            Some(expiration) => expiration <= Utc::now(),
            None => false,
        }
    }

    // Check if the action token has been executed
    pub fn is_executed(&self) -> bool {
        self.executed_at.is_some()
    }

    // Update an action token's information
    pub fn update_token(
        conn: &mut DbConnection,
        token: &str,
        action_name: &str,
    ) -> Result<ActionToken, Error> {
        let action_token = token_actions::table
            .filter(token_actions::token.eq(token))
            .first::<ActionToken>(conn)?;

        let now = Utc::now();

        let updated_action_token = diesel::update(&action_token)
            .set((
                token_actions::action_name.eq(action_name),
                token_actions::updated_at.eq(now),
                token_actions::executed_at.eq(Some(now)),
            ))
            .get_result::<ActionToken>(conn)?;

        Ok(updated_action_token)
    }
}
