-- Your SQL goes here
CREATE TABLE pokemon_stats (
  id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
  pokemon_id varchar(36) NOT NULL,
  name varchar(255),
  base_stat integer,
  effort integer,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id),
  FOREIGN KEY (pokemon_id) REFERENCES pokemons(id)
);