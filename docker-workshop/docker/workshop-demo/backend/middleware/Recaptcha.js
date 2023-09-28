import Middleware from "felony/dist/base/Middleware.js";
import got from "got";
/**
 * Middleware that validates captcha.
 * @class
 */
export default class Recaptcha extends Middleware {
  /**
   * This is the middleware action handler.
   *
   *  - If you set context.response.body within any of the middleware
   *    it will stop propagation through other middleware and request
   *    won't reach the route.
   *
   * @param {any} request
   * @param {any} response
   * @param {Function} next
   * @return {Promise<void>}
   *
   * @throws any
   *  - Throwing error will stop request propagation through
   *    other middleware and will stop it from reaching the route.
   */
  async handle(request, response, next) {
    if (Felony.config.recaptcha.disable) {
      return next();
    }
    const captchaToken = request.body["g-recaptcha-response"];
    if (!captchaToken) {
      return response.status(401).send("Recaptcha invalid.");
    }

    try {
      const captcha = await got.post(Felony.config.recaptcha.uri, {
        form: {
          secret: Felony.config.recaptcha.secretKey,
          response: captchaToken,
        },
      }).json();
      console.log(captcha);
      if (!captcha || !captcha.success || captcha.score <= 0.5) {
        return response.status(401).send("Recaptcha invalid.")
      };
    } catch (error) {
      response.status(401).send("g-recaptcha-response");
    }
    delete request.body["g-recaptcha-response"];
    next();
  }
}