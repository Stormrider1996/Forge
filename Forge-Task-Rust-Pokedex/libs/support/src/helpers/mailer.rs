use error::Error;
use lettre::{
    message::header::ContentType, transport::smtp::authentication::Credentials, Message,
    SmtpTransport, Transport,
};
use std::env;

pub async fn send_mail(email: String, base_url: String, token: String) -> Result<(), Error> {
    // Create an email message using the Message::builder() method
    let email = Message::builder()
        .from("NoBody <nobody@gmail.com>".parse()?)
        .to(email.parse()?)
        .subject("Yo")
        .header(ContentType::TEXT_PLAIN)
        .body(format!(
            "http://{}/auth/v1/verify-email/{}",
            base_url, token
        ))?;

    // Create a credentials object using your Gmail username and password
    let username = env::var("SMPT_USERNAME").expect("USERNAME not set");
    let password = env::var("SMPT_PASSWORD").expect("PASSWORD not set");
    let creds = Credentials::new(username, password);

    // Create a mailer object using the SmtpTransport::relay() method
    let mailer = SmtpTransport::relay("smtp.gmail.com")?
        .credentials(creds)
        .build();

    mailer.send(&email)?;
    Ok(())
}
