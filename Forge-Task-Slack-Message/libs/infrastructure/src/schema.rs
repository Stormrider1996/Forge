// @generated automatically by Diesel CLI.

diesel::table! {
    slack_messages (id) {
        #[max_length = 36]
        id -> Varchar,
        name -> Varchar,
        channel -> Varchar,
        icon_emoji -> Varchar,
        message -> Text,
        checked -> Bool,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}
