-- Your SQL goes here
CREATE TABLE token_actions (
    id varchar(36) NOT NULL DEFAULT uuid_generate_v4(),
    entity_id varchar(36) NOT NULL,
    token varchar(255) NOT NULL,
    action_name varchar(255) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    updated_at timestamptz NOT NULL DEFAULT NOW(),
    executed_at timestamptz DEFAULT NULL,
    expires_at timestamptz,
    PRIMARY KEY (id)
);