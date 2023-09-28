use actix_web::{web, HttpResponse};
use infrastructure::db::Pg;
use std::sync::Arc;

pub fn configure(pg_pool: Arc<Pg>, cfg: &mut web::ServiceConfig) {
    cfg.route(
        "/_health",
        web::get().to(|| async { HttpResponse::Ok().body("I'm healthy".to_string()) }),
    );

    slack_message(pg_pool, cfg);
}

fn slack_message(p: Arc<Pg>, c: &mut web::ServiceConfig) {
    crate::application::slack_message::setup::routes(p, c);
}
