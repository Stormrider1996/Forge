#[allow(unused_imports)]
#[macro_use]
pub extern crate diesel;

#[allow(unused_imports)]
#[macro_use]
pub extern crate diesel_migrations;

pub mod db;
pub mod schema;
pub mod state;

use diesel_migrations::{embed_migrations, EmbeddedMigrations, MigrationHarness};
pub const MIGRATIONS: EmbeddedMigrations = embed_migrations!("../../migrations");

pub fn migrate(
    connection: &mut impl MigrationHarness<diesel::pg::Pg>,
) -> Result<(), Box<dyn std::error::Error + Send + Sync + 'static>> {
    connection.run_pending_migrations(MIGRATIONS)?;

    Ok(())
}
