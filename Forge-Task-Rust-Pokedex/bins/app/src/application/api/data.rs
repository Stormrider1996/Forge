use serde::{Deserialize, Serialize};
use support::store::models::user_pokedex::UserPokedex;
use validr::{Validation, *};

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct RequestGuessData {
    pub guess: Option<String>,
}

impl Validation for RequestGuessData {
    fn modifiers(&self) -> Vec<Modifier<Self>> {
        vec![modifier_lowercase!(guess), modifier_trim!(guess)]
    }

    fn rules(&self) -> Vec<Rule<Self>> {
        vec![rule_required!(guess)]
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct ResponsePokeImgData {
    pub img: String,
    pub catch_id: String,
}

impl ResponsePokeImgData {
    pub fn new(img: String, catch_id: String) -> Self {
        Self { img, catch_id }
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct PokedexResponseData {
    pub pokedex: Vec<UserPokedex>,
}

impl PokedexResponseData {
    pub fn new(pokedex: Vec<UserPokedex>) -> Self {
        Self { pokedex }
    }
}
