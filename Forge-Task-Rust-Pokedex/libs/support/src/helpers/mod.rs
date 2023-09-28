pub mod auth;
pub mod http;
pub mod mailer;
pub mod pokemon;

/// Single method to init logs from everywhere
pub fn setup_logger() {
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("debug")).init()
}
