use chrono::{DateTime, Utc};
use diesel::{
    query_builder::AsChangeset, ExpressionMethods, Insertable, QueryDsl, Queryable, RunQueryDsl,
};
use error::Error;
use infrastructure::{db::DbConnection, schema::users};
use serde::{Deserialize, Serialize};

#[derive(
    Debug, Clone, PartialEq, Eq, Insertable, Deserialize, Serialize, Queryable, AsChangeset,
)]
#[diesel(table_name = users)]
#[diesel(treat_none_as_null = true)]
pub struct User {
    pub id: String,
    pub email: String,
    pub first_name: String,
    pub last_name: String,
    pub password: String,
    pub refresh_token: Option<String>,
    pub verified_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl User {
    // Check if a user with the given email exists in the database
    pub fn email_exists(conn: &mut DbConnection, email: &str) -> Result<bool, Error> {
        diesel::select(diesel::dsl::exists(
            users::dsl::users.filter(users::dsl::email.eq(email)),
        ))
        .get_result::<bool>(conn)
        .map_err(Error::from)
    }

    // Find a user by their ID
    pub fn find_user_by_id(conn: &mut DbConnection, id: &str) -> Result<User, Error> {
        users::dsl::users
            .filter(users::dsl::id.eq(id))
            .first::<User>(conn)
            .map_err(Error::from)
    }

    // Find a user by their email
    pub fn find_user_by_email(conn: &mut DbConnection, email: &str) -> Result<User, Error> {
        users::dsl::users
            .filter(users::dsl::email.eq(email))
            .first::<User>(conn)
            .map_err(Error::from)
    }

    // Find a user by their password
    pub fn find_user_by_password(conn: &mut DbConnection, password: &str) -> Result<User, Error> {
        users::dsl::users
            .filter(users::dsl::password.eq(password))
            .first::<User>(conn)
            .map_err(Error::from)
    }

    // Find a user by their refresh token
    pub fn find_user_by_refresh_token(
        conn: &mut DbConnection,
        refresh_token: &str,
    ) -> Result<User, Error> {
        users::dsl::users
            .filter(users::dsl::refresh_token.eq(refresh_token))
            .first::<User>(conn)
            .map_err(Error::from)
    }

    // Update a user's information
    pub fn update_user(conn: &mut DbConnection, user: &User) -> Result<User, Error> {
        diesel::update(users::dsl::users)
            .set(user)
            .get_result::<User>(conn)
            .map_err(Error::from)
    }

    // Update a user's refresh token
    pub fn update_refresh_token(
        conn: &mut DbConnection,
        id: &str,
        refresh_token: &str,
    ) -> Result<User, Error> {
        diesel::update(users::dsl::users)
            .set(users::dsl::refresh_token.eq(refresh_token))
            .filter(users::dsl::id.eq(id))
            .get_result::<User>(conn)
            .map_err(Error::from)
    }

    // Set refresh token to null
    pub fn set_refresh_token_null(conn: &mut DbConnection, id: &str) -> Result<User, Error> {
        diesel::update(users::dsl::users)
            .set(users::dsl::refresh_token.eq::<Option<String>>(None))
            .filter(users::dsl::id.eq(id))
            .get_result::<User>(conn)
            .map_err(Error::from)
    }
}
