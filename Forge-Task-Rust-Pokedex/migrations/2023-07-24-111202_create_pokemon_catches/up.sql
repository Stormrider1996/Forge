-- Your SQL goes here
CREATE TABLE pokemon_catches (
  id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
  user_id varchar(36) NOT NULL,
  pokemon_id varchar(36) NOT NULL,
  is_success boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (pokemon_id) REFERENCES pokemons (id)
);