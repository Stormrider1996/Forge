use std::env;
use std::process::Command;

pub use diesel::pg::PgConnection;
use diesel::{
    r2d2::{ConnectionManager, Pool, PooledConnection},
    Connection,
};
use error::Error;

pub type DbPool = Pool<ConnectionManager<PgConnection>>;
pub type DbConnection = PooledConnection<ConnectionManager<PgConnection>>;

/// Startup and return postgres pool
pub fn get_pg_pool() -> DbPool {
    let mut params =
        config::get_multiple_default(vec![("DATABASE_URL", ""), ("PG_POOL_MAX_SIZE", "8")]);

    let pool_size: u32 = params.pop().unwrap().parse().unwrap();
    let database_url = params.pop().unwrap();
    assert!(!database_url.is_empty(), "DATABASE_URL must be set");

    let manager = ConnectionManager::<PgConnection>::new(database_url);
    Pool::builder()
        .max_size(pool_size)
        .build(manager)
        .unwrap_or_else(|e| panic!("Failed to create postgres db pool: {}", e))
}

pub fn get_pg_pool_test() -> DbPool {
    let mut params =
        config::get_multiple_default(vec![("TEST_DATABASE_URL", ""), ("PG_POOL_MAX_SIZE", "8")]);

    let pool_size: u32 = params.pop().unwrap().parse().unwrap();
    let database_url = params.pop().unwrap();
    assert!(!database_url.is_empty(), "DATABASE_URL must be set");

    let manager = ConnectionManager::<PgConnection>::new(database_url);
    Pool::builder()
        .max_size(pool_size)
        .build(manager)
        .unwrap_or_else(|e| panic!("Failed to create postgres db pool: {}", e))
}

/// Struct to hold our postgres pool with some integrated commands
#[derive(Clone)]
pub struct Pg {
    pool: DbPool,
}

impl Default for Pg {
    fn default() -> Self {
        Self::new()
    }
}

impl Pg {
    /// Create new instance of this struct with integrated pool
    pub fn new() -> Pg {
        Pg {
            pool: get_pg_pool(),
        }
    }

    pub fn test() -> Pg {
        Pg {
            pool: get_pg_pool_test(),
        }
    }

    /// Get connection from the pool
    pub fn connection(&self) -> Result<DbConnection, error::Error> {
        self.pool.get().map_err(error::Error::from)
    }

    /// Staticly generates completely new independent connection
    /// to use somewhere where pool cannot be passed.
    pub fn single_connection() -> PgConnection {
        let database_url = config::get("DATABASE_URL").expect("DATABASE_URL must be set");

        PgConnection::establish(&database_url)
            .unwrap_or_else(|_| panic!("Error connecting to {}", &database_url))
    }
}

pub fn setup_test_database() -> Result<(), Error> {
    let mut command = Command::new("diesel");
    let db_url = env::var("TEST_DATABASE_URL").expect("TEST_DATABASE_URL must be set");
    command.args(["setup", "--database-url", &db_url]);
    let status = command.status().map_err(Error::from)?;
    // Check if the command was successful
    if status.success() {
        println!("Database setup completed");
        Ok(())
    } else {
        Err(Error::InternalError("Command failed".to_string()))
    }
}
