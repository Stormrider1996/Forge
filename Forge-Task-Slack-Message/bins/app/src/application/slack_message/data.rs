use diesel::{AsChangeset, Insertable};
use infrastructure::schema::slack_messages;
use serde::{Deserialize, Serialize};
use validr::*;

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone)]
pub struct RequestSlackMessageData {
    pub name: Option<String>,
    pub channel: Option<String>,
    pub icon_emoji: Option<String>,
    pub message: Option<String>,
}
impl Validation for RequestSlackMessageData {
    /// Modifiers for RequestUserExpertiseData
    fn modifiers(&self) -> Vec<Modifier<Self>> {
        vec![]
    }
    /// Rules for RequestUserExpertiseData
    fn rules(&self) -> Vec<Rule<Self>> {
        vec![
            rule_required!(name),
            rule_required!(channel),
            rule_required!(icon_emoji),
            rule_required!(message),
        ]
    }
}

impl RequestSlackMessageData {
    /// Function that will transfrom incoming user expertise data to an insertable object
    pub fn insertable(self) -> SlackMessageData {
        let name = self.name.unwrap();
        let channel = self.channel.unwrap();
        let icon_emoji = self.icon_emoji.unwrap();
        let message = self.message.unwrap();
        SlackMessageData {
            name,
            channel,
            icon_emoji,
            message,
        }
    }
}

#[derive(Serialize, Deserialize, PartialEq, Eq, Debug, Clone, Insertable, AsChangeset)]
#[diesel(table_name = slack_messages)]
#[diesel(treat_none_as_null = true)]
#[serde(rename_all = "camelCase")]
pub struct SlackMessageData {
    pub name: String,
    pub channel: String,
    pub icon_emoji: String,
    pub message: String,
}
