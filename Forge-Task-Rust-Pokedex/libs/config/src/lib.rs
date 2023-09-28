pub use dotenv::{from_path, vars};
use error::Error;

/// Load values from shell environment
pub fn env() {
    let vars: Vec<(String, String)> = std::env::vars().collect();

    for (key, value) in vars.iter() {
        set(key, value);
    }
}

/// Load values from dotenv and attach it to values
pub fn dotenv(path: Option<String>) {
    let vars: Vec<(String, String)> = match path {
        Some(p) => {
            match from_path(&p) {
                Ok(_) => (),
                Err(e) => panic!("Couldn't load the dotenv config at '{}', error: {}", p, e),
            }

            vars().collect()
        }
        None => vars().collect(),
    };

    for (key, value) in vars.iter() {
        set(key, value);
    }
}

/// Set and replace existing key if found
pub fn set(key: &str, value: &str) {
    let temp = get(key);

    if temp.is_ok() {
        std::env::remove_var(key);
    }

    std::env::set_var(key, value)
}

/// Initialize global configurations from dotenv
pub async fn initialize() {
    env();
    dotenv(None);
    println!("Configuration loaded and ready.");
}

/// Get configuration variable
pub fn get(key: &str) -> Result<String, Error> {
    let key = String::from(key);

    std::env::var(key).map_err(|_e| Error::NotFound)
}

/// Get value from config or pass the default value
pub fn get_default(key: &str, default: &str) -> String {
    get(key).unwrap_or_else(|_| String::from(default))
}

/// Get mutliple keys with set default values
pub fn get_multiple_default(keys: Vec<(&str, &str)>) -> Vec<String> {
    let mut collected = vec![];

    for (key, default) in keys.iter() {
        collected.push(get_default(key, default));
    }

    collected
}
