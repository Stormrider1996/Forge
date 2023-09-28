/* use super::{contract::*, data::*}; */
use super::{
    contract::{PgServiceContract, SlackMessageContract},
    data::SlackMessageData,
};
use async_trait::async_trait;
use error::Error;
use reqwest::StatusCode;

pub struct SlackMessages<B: PgServiceContract> {
    pub service: B,
}

#[async_trait]
impl<B> SlackMessageContract for SlackMessages<B>
where
    B: PgServiceContract + Sync + Send,
{
    /// Insert slack message into the database
    async fn create(&self, data: SlackMessageData) -> Result<usize, Error> {
        let stored_message = self.service.create(data.clone()).await?;

        match self.service.send_to_slack(data).await?.status() {
            StatusCode::OK => self.service.update_checked(&stored_message.id).await,
            StatusCode::NOT_FOUND => Err(Error::NotFoundWithCause("channel not found".to_string())),
            _ => Err(Error::InternalServerError(
                "something went wrong".to_string(),
            )),
        }
    }
}
