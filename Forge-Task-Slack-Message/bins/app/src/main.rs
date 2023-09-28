mod application;
pub mod web;
use infrastructure::db::Pg;
use std::sync::Arc;

#[actix_web::main]
#[cfg(not(tarpaulin_include))]
async fn main() {
    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();

    let pg = Arc::new(Pg::new());
    /* let mut connection = infrastructure::db::Pg::single_connection(); */
    config::initialize().await;

    web::start_server(pg)
        .await
        .expect("Error while starting/running http server");
}
