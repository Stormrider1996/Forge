use ::error::Error;
use diesel::{prelude::Queryable, AsChangeset, Insertable, RunQueryDsl};
use infrastructure::{db::DbConnection, schema::users};
use serde::{Deserialize, Serialize};
use support::store::models::user::User;
use validr::{error::ValidationError, *};

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct RequestUserData {
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub email: Option<String>,
    pub password: Option<String>,
}

impl Validation for RequestUserData {
    fn modifiers(&self) -> Vec<Modifier<Self>> {
        vec![]
    }

    fn rules(&self) -> Vec<Rule<Self>> {
        vec![
            rule_required!(first_name),
            rule_required!(last_name),
            rule_email!(email),
            rule_required!(password),
            rule_length_min!(password, 8),
            Rule::new("password", |obj: &Self, error: &mut ValidationError| {
                if let Some(password) = &obj.password {
                    if !password.chars().any(|c| c.is_ascii_punctuation()) {
                        // If no special character found in the password
                        error.add("password_no_special_character");
                    }
                }
            }),
        ]
    }
}

impl RequestUserData {
    pub fn insertable(self) -> Result<UserData, Error> {
        let user_data = UserData {
            first_name: self.first_name.unwrap(),
            last_name: self.last_name.unwrap(),
            email: self.email.unwrap(),
            password: UserData::hash_password(self.password.unwrap())?,
        };
        Ok(user_data)
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct ResendEmailReqData {
    pub email: Option<String>,
}

impl Validation for ResendEmailReqData {
    fn modifiers(&self) -> Vec<Modifier<Self>> {
        vec![]
    }

    fn rules(&self) -> Vec<Rule<Self>> {
        vec![rule_required!(email), rule_email!(email)]
    }
}

#[derive(
    Queryable, Serialize, Deserialize, PartialEq, Eq, Debug, Clone, Insertable, AsChangeset,
)]
#[diesel(table_name = users)]
#[diesel(treat_none_as_null = true)]
pub struct UserData {
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub password: String,
}

impl UserData {
    pub fn insert_new_user(conn: &mut DbConnection, data: &UserData) -> Result<User, Error> {
        diesel::insert_into(users::dsl::users)
            .values(data)
            .get_result::<User>(conn)
            .map_err(Error::from)
    }

    pub fn hash_password(password: String) -> Result<String, Error> {
        Ok(bcrypt::hash(password, bcrypt::DEFAULT_COST)?)
    }
}
