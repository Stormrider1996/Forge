use std::sync::Arc;

use actix_web::web;
use infrastructure::db::Pg;

use super::{
    domain::Api,
    http::{
        handle_fetch_rand_pokemon::handle_fetch_rand_pokemon,
        handle_fetch_users_pokedex::handle_fetch_users_pokedex,
        handle_pokemon_guess::handle_pokemon_guess,
    },
    infrastructure::{PgRepository, PgService},
};

pub fn routes(pg_pool: Arc<Pg>, cfg: &mut web::ServiceConfig) {
    let service = Api {
        repository: PgRepository {
            pg_pool: pg_pool.clone(),
        },
        service: PgService { pg_pool },
    };

    cfg.app_data(web::Data::new(service));

    cfg.route(
        "/api/{version}/fetch-rand-pokemon/{catch_id}",
        web::get().to(handle_fetch_rand_pokemon::<Api<PgRepository, PgService>>),
    );

    cfg.route(
        "/api/{version}/guess-rand-pokemon/{catch_id}",
        web::post().to(handle_pokemon_guess::<Api<PgRepository, PgService>>),
    );

    cfg.route(
        "/api/{version}/user-pokedex",
        web::get().to(handle_fetch_users_pokedex::<Api<PgRepository, PgService>>),
    );
}
