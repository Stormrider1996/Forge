use super::{
    contract::{PgRepositoryContract, PgServiceContract, RegistrationContract},
    data::UserData,
};
use async_trait::async_trait;
use error::Error;
use support::{helpers::mailer::send_mail, store::models::action_token::ActionToken};

pub struct Auth<A: PgRepositoryContract, B: PgServiceContract> {
    pub repository: A,
    pub service: B,
}

#[async_trait]
impl<A, B> RegistrationContract for Auth<A, B>
where
    A: PgRepositoryContract + Send + Sync,
    B: PgServiceContract + Send + Sync,
{
    // Create a new user and send a verification email
    async fn create_user(&self, user: UserData, base_url: String) -> Result<String, Error> {
        if self
            .repository
            .find_user_by_email(&user.email)
            .await
            .is_ok()
        {
            return Err(Error::BadRequest(
                "Choose a different email address".to_string(),
            ));
        }
        let user_model = self.service.insert_user(user.clone()).await?;
        let token = ActionToken::generate_token(10);
        self.service
            .insert_action_token(user_model.id.clone(), &token, "pending_verification")
            .await?;
        send_mail(user.email.clone(), base_url, token.clone()).await?;
        Ok(token)
    }

    // Resend a verification email for an existing user
    async fn resend_email(&self, email: &str, base_url: String) -> Result<String, Error> {
        let user = self
            .repository
            .find_user_by_email(email)
            .await
            .map_err(|_| Error::NotFoundWithCause("User not found".to_string()))?;

        let token = ActionToken::generate_token(10);
        self.service
            .insert_action_token(user.id.clone(), &token, "pending_verification")
            .await?;
        send_mail(user.email.clone(), base_url, token.clone()).await?;
        Ok(token)
    }
}
