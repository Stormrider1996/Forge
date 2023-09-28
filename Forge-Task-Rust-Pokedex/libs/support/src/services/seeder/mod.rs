pub mod pokemon;

use infrastructure::db::{DbConnection, Pg};
use std::sync::Arc;

/// Run all the seeders, this will run the dev seeders if we are in dev env.
pub async fn run(pg: Arc<Pg>) {
    info!("Starting seeding process...");

    if &config::get_default("IS_DEV", "")[..] == "true" {
        match pg.connection() {
            Ok(connection) => run_dev(connection).await,
            Err(e) => error!("Couldn't set database connection. Cause: {}", e),
        };
    }

    info!("Seeding completed.");
}

pub async fn run_dev(mut connection: DbConnection) {
    if let Err(err) = pokemon::insert_pokemons(&mut connection).await {
        eprintln!("Error in run_dev: {}", err);
    }
}
