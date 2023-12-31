import Route from "felony/dist/base/Route.js";

/**
 * @api {POST} /_health
 * @apiName Liveness Check
 * @apiGroup MyGroup
 * @class
 */
export default class contact extends Route {
  /**
   * HTTP method used for this route
   *
   * @type string
   */
  method = "GET";

  /**
   * HTTP path path after the hostname for this route
   *
   * @type string
   */
  path = "/_health";

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
      response.status(200).send();
    } catch (error) {
      response.status(error.statusCode || 500).send("Something went wrong.");
    }
  }
}