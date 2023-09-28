use chrono::NaiveDateTime;
use diesel::{AsChangeset, Insertable, Queryable};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone, Queryable, Insertable, AsChangeset)]
#[diesel(table_name = infrastructure::schema::slack_messages)]
pub struct SlackMessage {
    #[serde(default)]
    pub id: String,
    pub name: String,
    pub channel: String,
    pub icon_emoji: String,
    pub message: String,
    pub checked: bool,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}
