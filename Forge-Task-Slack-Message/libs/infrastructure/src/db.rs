pub use diesel::pg::PgConnection;
use diesel::r2d2::{ConnectionManager, Pool, PooledConnection};
use diesel::Connection;
use dotenv::dotenv;
use std::env;

pub type DbPool = Pool<ConnectionManager<PgConnection>>;
pub type DbConnection = PooledConnection<ConnectionManager<PgConnection>>;

/// Startup and return postgres pool
pub fn get_pg_pool() -> DbPool {
    dotenv().ok(); // Loads the environment variables from the .env file

    let pool_size: u32 = env::var("POOL_SIZE")
        .unwrap_or_else(|_| "10".to_string()) // Default value if POOL_SIZE is not set
        .parse()
        .expect("Failed to parse POOL_SIZE as u32");

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");

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

    /// Get connection from the pool
    pub fn connection(&self) -> Result<DbConnection, error::Error> {
        self.pool.get().map_err(error::Error::from)
    }

    /// Staticly generates completely new independent connection
    /// to use somewhere where pool cannot be passed.
    pub fn single_connection() -> PgConnection {
        let database_url = config::get("PG_DB_URL").expect("PG_DB_URL must be set");

        PgConnection::establish(&database_url)
            .unwrap_or_else(|_| panic!("Error connecting to {}", &database_url))
    }
}

#[cfg(feature = "dev")]
pub async fn test_init_db() -> (Pg) {
    config::initialize().await;

    crate::migrate(&mut Pg::single_connection()).unwrap();

    (Pg::new())
}
