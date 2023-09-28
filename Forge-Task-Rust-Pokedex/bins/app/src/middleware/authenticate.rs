use std::cell::RefCell;
use std::rc::Rc;
use std::task::{Context, Poll};

use actix_web::body::MessageBody;
use actix_web::HttpMessage;

use actix_web::{
    dev::{Service, ServiceRequest, ServiceResponse, Transform},
    error::ErrorUnauthorized,
    Error,
};
use futures::future;
use support::helpers::auth::verify_access_token;

#[derive(Default)]
pub struct VerifyJWT {
    skip: Vec<String>,
}

impl<S, B> Transform<S, ServiceRequest> for VerifyJWT
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    B: MessageBody,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type InitError = ();
    type Transform = VerifyJWTMiddleware<S>;
    type Future = future::Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        future::ok(VerifyJWTMiddleware::<S> {
            service: Rc::new(RefCell::new(service)),
            skip: self.skip.clone(),
        })
    }
}

pub struct VerifyJWTMiddleware<S> {
    service: std::rc::Rc<std::cell::RefCell<S>>,
    skip: Vec<String>,
}

impl VerifyJWT {
    pub fn add_ignored_routes(mut self, mut routes: Vec<String>) -> Self {
        self.skip.append(&mut routes);
        self
    }
}

impl<S, B> Service<ServiceRequest> for VerifyJWTMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    B: MessageBody,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future =
        future::Either<future::Ready<Result<ServiceResponse<B>, actix_web::Error>>, S::Future>;

    fn poll_ready(&self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.service.poll_ready(cx)
    }

    fn call(&self, req: ServiceRequest) -> Self::Future {
        let skip = self.skip.contains(&req.match_pattern().unwrap_or_default());
        if skip {
            return future::Either::Right(self.service.call(req));
        }

        let auth_header = req.headers().get("Authorization");

        if auth_header.is_none() {
            return future::Either::Left(future::err(ErrorUnauthorized(
                "Authorization header not found",
            )));
        }

        let token = auth_header
            .unwrap()
            .to_str()
            .unwrap()
            .replace("Bearer ", "");

        let claims = verify_access_token(&token);

        if claims.is_err() {
            return future::Either::Left(future::err(ErrorUnauthorized("Invalid access token")));
        }

        req.extensions_mut().insert(claims.unwrap().sub);
        let fut = self.service.call(req);
        future::Either::Right(fut)
    }
}
