-- Your SQL goes here
CREATE TABLE user_pokedexes (
  id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
  user_id varchar(36) NOT NULL,
  pokemon_id varchar(36) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);