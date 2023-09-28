use super::data::*;
use async_trait::async_trait;
use error::Error;
use support::store::models::slack_message::SlackMessage;
#[cfg_attr(test, mockall::automock)]
#[async_trait]
pub trait SlackMessageContract {
    /// Insert slack message into the database
    async fn create(&self, message: SlackMessageData) -> Result<usize, Error>;
}

#[cfg_attr(test, mockall::automock)]
#[async_trait]
pub trait PgServiceContract {
    /// Insert slack message into the database
    async fn create(&self, message: SlackMessageData) -> Result<SlackMessage, Error>;
    /// Function to send a slack message trough slack API
    async fn send_to_slack(
        &self,
        data: SlackMessageData,
    ) -> Result<reqwest::Response, reqwest::Error>;
    /// Function for updating the SlackMessage model
    async fn update_checked(&self, message_id: &str) -> Result<usize, Error>;
}
