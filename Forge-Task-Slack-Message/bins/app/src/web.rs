use actix_web::{App, HttpServer};
use infrastructure::db::Pg;
use std::sync::Arc;

/// Start the server
#[cfg(not(tarpaulin_include))]
pub async fn start_server(pg: Arc<Pg>) -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .app_data::<infrastructure::state::AppState>(infrastructure::state::initialize())
            .configure(|cfg| crate::application::configure(Arc::clone(&pg), cfg))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
