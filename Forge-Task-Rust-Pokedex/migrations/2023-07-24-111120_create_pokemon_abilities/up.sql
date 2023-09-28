-- Your SQL goes here
CREATE TABLE pokemon_abilities (
  id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
  pokemon_id varchar(36) NOT NULL,
  name varchar(255),
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id),
  FOREIGN KEY (pokemon_id) REFERENCES pokemons(id)
);