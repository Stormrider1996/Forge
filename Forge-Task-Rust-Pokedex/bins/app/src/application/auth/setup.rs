use super::domain::Auth;
use super::http::handle_login::handle_login;
use super::http::handle_logout::handle_logout;
use super::http::handle_refresh_token::handle_refresh_token;
use super::http::handle_verify_email::handle_verify_email;
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
        "/auth/{version}/verify-email/{token}",
        web::get().to(handle_verify_email::<Auth<PgRepository, PgService>>),
    );

    cfg.route(
        "/auth/{version}/login",
        web::post().to(handle_login::<Auth<PgRepository, PgService>>),
    );

    cfg.route(
        "/auth/{version}/logout",
        web::get().to(handle_logout::<Auth<PgRepository, PgService>>),
    );

    cfg.route(
        "/auth/{version}/refresh",
        web::get().to(handle_refresh_token::<Auth<PgRepository, PgService>>),
    );
}
