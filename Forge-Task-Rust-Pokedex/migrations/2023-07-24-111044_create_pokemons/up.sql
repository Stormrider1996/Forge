-- Your SQL goes here
CREATE TABLE pokemons (
  id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
  name varchar(255) UNIQUE,
  base_experience integer,
  height integer,
  pokemon_id integer,
  is_default boolean,
  pokemon_order integer,
  image varchar(255),
  weight integer,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);