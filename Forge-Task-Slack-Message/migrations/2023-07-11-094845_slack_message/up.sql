CREATE TABLE slack_messages (
    id        VARCHAR(36) DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    name        VARCHAR NOT NULL,
    channel     VARCHAR NOT NULL,
    icon_emoji  VARCHAR NOT NULL,
    message     TEXT NOT NULL,
	"checked"   BOOLEAN DEFAULT false NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
)