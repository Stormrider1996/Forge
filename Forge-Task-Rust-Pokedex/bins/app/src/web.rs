use crate::middleware::authenticate::VerifyJWT;
use actix_web::{middleware::Logger, App, HttpServer};
use infrastructure::db::Pg;
use std::sync::Arc;

pub async fn start_server(pg: Arc<Pg>) -> std::io::Result<()> {
    let address = format!(
        "{}:{}",
        config::get_default("LISTEN_ADDRESS", "0.0.0.0"),
        config::get_default("LISTEN_PORT", "4554")
    );

    let workers: usize = config::get_default("HTTP_SERVER_NUMBER_OF_WORKERS", "4")
        .parse()
        .unwrap_or(4);

    let per_millisecond: u64 =
        config::get_default("HTTP_RATE_LIMITER_REQUEST_COOLDOWN_MILLS", "100")
            .parse()
            .unwrap_or(100);
    let burst_size: u32 = config::get_default("HTTP_RATE_BURST_SIZE", "10")
        .parse()
        .unwrap_or(10);

    info!("Starting application with rate limitter set to burst size: {} and per millisecond rate limit of {}", &burst_size, &per_millisecond);

    HttpServer::new(move || {
        App::new()
            .wrap(VerifyJWT::default().add_ignored_routes(vec![
                "/auth/register/{version}/user".to_string(),
                "/auth/register/{version}/resend-email".to_string(),
                "/auth/{version}/verify-email/{token}".to_string(),
                "/auth/{version}/login".to_string(),
                "/_health".to_string(),
            ]))
            // Logging setup
            .wrap(Logger::default())
            .wrap(Logger::new(
                "%a %t '%r' %s %b '%{Referer}i' '%{User-Agent}i' %T",
            ))
            .app_data::<infrastructure::state::AppState>(infrastructure::state::initialize())
            .configure(|cfg| crate::application::configure(Arc::clone(&pg), cfg))
    })
    .workers(workers)
    .bind(address)
    .expect("Unable to bind server")
    .run()
    .await
}
