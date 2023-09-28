import Route from "felony/dist/base/Route.js";
import Recaptcha from "../middleware/Recaptcha.js";
import Validation from "../middleware/Validation.js";
import SendGridService from "../services/SendGrid.js";
import client from "@sendgrid/client";

/**
 * @api {PUT} /contact
 * @apiName Subscription
 * @apiGroup MyGroup
 * @class
 */
export default class Subscription extends Route {
  /**
   * HTTP method used for this route
   *
   * @type string
   */
  method = "PUT";

  /**
   * HTTP path path after the hostname for this route
   *
   * @type string
   */
  path = "/subscribe";

  /**
   * Description of this route that will be used while loading to describe this route
   *
   * @type string
   */
  description = "";

  /**
   * Array containing all the middleware that will be launched before request
   * enters this route.
   *
   * Types allowed for this define:
   * @type string[] | string | Middleware[] | Middleware
   * Type string[]
   *  - Here you can define files with their full import path, they will have to each export default class that extends Middleware class
   *
   * Type string
   *  - There is no need for array if you only have one path to middleware
   *
   * Type Middleware[]
   *  - You can preload multiple middleware classes in your route and then push them into this array
   *
   * Type Middleware
   *  - You can assign a single middleware class to this key
   */
  middleware = [
    new Recaptcha(),
    new Validation(Felony.config.subscribe.validation),
  ];

  /**
 * Handler for this route that will return some response.
 *
 * @param {any} request
 * @param {any} response
 * @return {Promise<void|object|string>}
 */
  async handle(request, response) {
    try {
      const email = request.body.email;

      await SendGridService.subscribe(email);

      response.status(200).send({
        message: "Subscribed"
      });
    } catch (error) {
      response.status(500).send("Something went wrong.");
    }
  }
}
