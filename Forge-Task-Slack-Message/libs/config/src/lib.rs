pub use dotenv::{from_path, vars};
use error::Error;

#[allow(dead_code)]
fn print_env() {
    let env_vars = std::env::vars();
    for (key, value) in env_vars {
        println!("{key} = {value:?}");
    }
}

/// Initialize global configurations from dotenv
pub async fn initialize() {
    env();
    dotenv(None);
    args();
    println!("Configuration loaded and ready.");
    // print_env();
}

/// When the dotenv file is on a different location, we will load it here
pub async fn initialize_with_config(path: String) {
    env();
    dotenv(Some(path));
    args();
    println!("Configuration loaded and ready.");
}

/// Set and replace existing key if found
pub fn set(key: &str, value: &str) {
    let temp = get(key);

    if temp.is_ok() {
        std::env::remove_var(key);
    }

    std::env::set_var(key, value)
}

/// Set the value only if previous values doesn't exist on its place
pub fn set_if_not_empty(key: &str, value: &str) {
    let temp = get(key);

    if temp.is_err() {
        std::env::set_var(key, value)
    }
}

/// Get configuration variable
pub fn get(key: &str) -> Result<String, Error> {
    let key = String::from(key);

    std::env::var(key).map_err(|_e| Error::NotFound)
}

/// Load values from dotenv and attach it to values
pub fn dotenv(path: Option<String>) {
    let vars: Vec<(String, String)> = match path {
        Some(p) => {
            match from_path(&p) {
                Ok(_) => (),
                Err(e) => panic!("Couldn't load the dotenv config at '{p}', error: {e}"),
            }

            vars().collect()
        }
        None => vars().collect(),
    };

    for (key, value) in vars.iter() {
        set(key, value);
    }
}

/// Load values from shell environment
pub fn env() {
    let vars: Vec<(String, String)> = std::env::vars().collect();

    for (key, value) in vars.iter() {
        set(key, value);
    }
}

/// Load values from command line arguments passed
pub fn args() {
    let args: Vec<String> = std::env::args().collect();

    for arg in args.iter() {
        let mut items = arg.split('=');

        if let Some(key) = items.next() {
            let value = items.next().unwrap_or("true");
            set(key, value);
        }
    }
}
