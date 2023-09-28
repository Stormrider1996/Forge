use infrastructure::db::Pg;
use std::sync::Arc;

#[allow(unused_imports)]
#[macro_use]
extern crate log;

mod application;
pub mod middleware;
mod web;

#[actix_web::main]
async fn main() {
    support::helpers::setup_logger();

    config::initialize().await;
    let mut connection = infrastructure::db::Pg::single_connection();
    infrastructure::migrate(&mut connection).unwrap();

    let pg = Arc::new(Pg::new());

    support::services::seeder::run(pg.clone()).await;

    web::start_server(pg)
        .await
        .expect("Error while starting/running http server");
}
