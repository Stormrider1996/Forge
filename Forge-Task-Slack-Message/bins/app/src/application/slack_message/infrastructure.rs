use super::{contract::PgServiceContract, data::SlackMessageData};
use async_trait::async_trait;
use diesel::{ExpressionMethods, RunQueryDsl};
use error::Error;
use infrastructure::{db::Pg, schema::slack_messages, schema::slack_messages::checked};
use std::env;
use std::sync::Arc;
use support::store::models::slack_message::SlackMessage;

pub struct PgService {
    pub pg_pool: Arc<Pg>,
}

#[async_trait]
impl PgServiceContract for PgService {
    /// Insert slack message into the database
    async fn create(&self, data: SlackMessageData) -> Result<SlackMessage, Error> {
        let mut connection = self.pg_pool.connection()?;
        diesel::insert_into(slack_messages::table)
            .values(data)
            .get_result::<SlackMessage>(&mut connection)
            .map_err(Error::from)
    }

    /// Function for updating the SlackMessage model
    async fn update_checked(&self, id: &str) -> Result<usize, Error> {
        let mut connection = self.pg_pool.connection()?;

        diesel::update(slack_messages::table)
            .filter(slack_messages::id.eq(id))
            .set(checked.eq(true))
            .execute(&mut connection)
            .map_err(Error::from)
    }

    /// Function to send a slack message trough slack API
    async fn send_to_slack(
        &self,
        data: SlackMessageData,
    ) -> Result<reqwest::Response, reqwest::Error> {
        let body = format!(
            "{{\"channel\": \"{channel}\", \"username\": \"{name}\", \"text\": \"{message}\", \"icon_emoji\": \":{icon_emoji}:\"}}",
            message = data.message, name = data.name, channel = data.channel, icon_emoji = data.icon_emoji
        );

        reqwest::Client::new()
            .post(env::var("SLACK_URL").unwrap())
            .body(body)
            .send()
            .await
    }
}
