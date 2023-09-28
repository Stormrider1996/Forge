use actix_web::{web, HttpResponse};
use infrastructure::db::Pg;
use std::sync::Arc;

/// Function that will gather up all the routes and features and configure them
/// onto the http server before it starts running.
pub fn configure(pg_pool: Arc<Pg>, cfg: &mut web::ServiceConfig) {
    // Health check route
    cfg.route(
        "/_health",
        web::get().to(|| async { HttpResponse::Ok().body("I'm healthy".to_string()) }),
    );

    user(pg_pool, cfg)
}

fn user(p: Arc<Pg>, c: &mut web::ServiceConfig) {
    crate::application::registration::setup::routes(p.clone(), c);
    crate::application::auth::setup::routes(p.clone(), c);
    crate::application::api::setup::routes(p, c);
}
