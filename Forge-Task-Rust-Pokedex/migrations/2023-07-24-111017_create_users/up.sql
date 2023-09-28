-- Your SQL goes here
CREATE TABLE users (
  id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
  email varchar(255) UNIQUE NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  refresh_token varchar(255) DEFAULT NULL,
  verified_at timestamptz DEFAULT NULL,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz NOT NULL DEFAULT NOW(),
  PRIMARY KEY (id)
);