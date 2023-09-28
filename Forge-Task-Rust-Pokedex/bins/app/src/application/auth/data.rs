use serde::{Deserialize, Serialize};
use validr::{Validation, *};

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct RequestLoginData {
    pub email: Option<String>,
    pub password: Option<String>,
}

impl Validation for RequestLoginData {
    fn modifiers(&self) -> Vec<Modifier<Self>> {
        vec![]
    }

    fn rules(&self) -> Vec<Rule<Self>> {
        vec![
            rule_required!(email),
            rule_email!(email),
            rule_required!(password),
        ]
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct ResponseLoginData {
    pub access_token: String,
}

impl ResponseLoginData {
    pub fn new(access_token: String) -> Self {
        Self { access_token }
    }
}
