use mockall::predicate::*;

use crate::application::auth::contract::{AuthContract, MockAuthContract};

#[tokio::test]
async fn test_verify_email() {
    let mut mock = MockAuthContract::new();
    mock.expect_verify_email()
        .with(eq("token"))
        .times(1)
        .returning(|_| Ok(("string1".to_string(), "string2".to_string())));
    mock.verify_email("token").await.unwrap();
}
