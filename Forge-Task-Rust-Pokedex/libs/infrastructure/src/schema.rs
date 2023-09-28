// @generated automatically by Diesel CLI.

diesel::table! {
    pokemon_abilities (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 36]
        pokemon_id -> Varchar,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    pokemon_catches (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 36]
        user_id -> Varchar,
        #[max_length = 36]
        pokemon_id -> Varchar,
        is_success -> Bool,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    pokemon_stats (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 36]
        pokemon_id -> Varchar,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        base_stat -> Nullable<Int4>,
        effort -> Nullable<Int4>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    pokemon_types (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 36]
        pokemon_id -> Varchar,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        slot -> Nullable<Int4>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    pokemons (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        base_experience -> Nullable<Int4>,
        height -> Nullable<Int4>,
        pokemon_id -> Nullable<Int4>,
        is_default -> Nullable<Bool>,
        pokemon_order -> Nullable<Int4>,
        #[max_length = 255]
        image -> Nullable<Varchar>,
        weight -> Nullable<Int4>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    token_actions (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 36]
        entity_id -> Varchar,
        #[max_length = 255]
        token -> Varchar,
        #[max_length = 255]
        action_name -> Varchar,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
        executed_at -> Nullable<Timestamptz>,
        expires_at -> Nullable<Timestamptz>,
    }
}

diesel::table! {
    user_pokedexes (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 36]
        user_id -> Varchar,
        #[max_length = 36]
        pokemon_id -> Varchar,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::table! {
    users (id) {
        #[max_length = 36]
        id -> Varchar,
        #[max_length = 255]
        email -> Varchar,
        #[max_length = 255]
        first_name -> Varchar,
        #[max_length = 255]
        last_name -> Varchar,
        #[max_length = 255]
        password -> Varchar,
        #[max_length = 255]
        refresh_token -> Nullable<Varchar>,
        verified_at -> Nullable<Timestamptz>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::joinable!(pokemon_abilities -> pokemons (pokemon_id));
diesel::joinable!(pokemon_catches -> pokemons (pokemon_id));
diesel::joinable!(pokemon_catches -> users (user_id));
diesel::joinable!(pokemon_stats -> pokemons (pokemon_id));
diesel::joinable!(pokemon_types -> pokemons (pokemon_id));

diesel::allow_tables_to_appear_in_same_query!(
    pokemon_abilities,
    pokemon_catches,
    pokemon_stats,
    pokemon_types,
    pokemons,
    token_actions,
    user_pokedexes,
    users,
);
