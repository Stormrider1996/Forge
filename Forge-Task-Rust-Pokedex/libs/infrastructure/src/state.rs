use super::db::{DbConnection, DbPool};
use std::sync::Arc;

#[derive(Clone)]
pub struct Pools {
    pub pg: DbPool,
}

#[derive(Clone)]
pub struct AppState {
    pub pools: Arc<Pools>,
}

impl AppState {
    pub fn pg_connection(&self) -> DbConnection {
        match self.pools.pg.get() {
            Ok(connection) => connection,
            Err(e) => panic!("State: {}", e),
        }
    }
}

/// Create State data struct
pub fn initialize() -> AppState {
    AppState {
        pools: Arc::new(Pools {
            pg: super::db::get_pg_pool(),
        }),
    }
}
