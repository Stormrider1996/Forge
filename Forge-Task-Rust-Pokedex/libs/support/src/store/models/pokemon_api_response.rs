use error::Error;

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
// PokemonAPIResponse struct that represents the API response
pub struct PokemonAPIResponse {
    pub abilities: Vec<AbilityFields>,
    pub id: Option<i32>,
    pub name: Option<String>,
    pub base_experience: Option<i32>,
    pub height: Option<i32>,
    pub is_default: Option<bool>,
    pub order: Option<i32>,
    pub sprites: Option<Sprites>,
    pub weight: Option<i32>,
    pub types: Vec<TypeFields>,
    pub stats: Vec<StatFields>,
}

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct AbilityFields {
    pub ability: Ability,
    pub is_hidden: bool,
    pub slot: i32,
}

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct Ability {
    pub name: Option<String>,
}
#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct Sprites {
    pub front_default: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct TypeFields {
    pub slot: Option<i32>,
    #[serde(rename = "type")]
    pub pokemon_type: Type,
}

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct Type {
    pub name: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct StatFields {
    pub base_stat: Option<i32>,
    pub effort: Option<i32>,
    pub stat: Stat,
}

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize)]
pub struct Stat {
    pub name: Option<String>,
}

impl PokemonAPIResponse {
    // Method to fetch Pokemon data from the API based on an ID
    pub async fn fetch_pokemon_data(id: i32) -> Result<Self, Error> {
        let url = format!("https://pokeapi.co/api/v2/pokemon/{}", id);
        let response = reqwest::get(&url)
            .await?
            .json::<PokemonAPIResponse>()
            .await?;
        Ok(response)
    }
}
