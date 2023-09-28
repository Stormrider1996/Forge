use super::domain::Auth;
use super::http::handle_create::*;
use super::http::handle_resend_email::*;
use super::infrastructure::{PgRepository, PgService};
use actix_web::web;
use infrastructure::db::Pg;
use std::sync::Arc;

pub fn routes(pg_pool: Arc<Pg>, cfg: &mut web::ServiceConfig) {
    let service = Auth {
        repository: PgRepository {
            pg_pool: pg_pool.clone(),
        },
        service: PgService { pg_pool },
    };

    cfg.app_data(web::Data::new(service));

    cfg.route(
        "/auth/register/{version}/user",
        web::post().to(handle_create::<Auth<PgRepository, PgService>>),
    );

    cfg.route(
        "/auth/register/{version}/resend-email",
        web::post().to(handle_resend_email::<Auth<PgRepository, PgService>>),
    );
}
