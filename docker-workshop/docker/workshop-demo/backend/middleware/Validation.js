import Middleware from "felony/dist/base/Middleware.js";
import Ajv from "ajv";
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true, dataPath: true, $data: true });
addFormats(ajv);

/**
 * Example middleware that modifies the request.
 * @class
 */
export default class Validation extends Middleware {
  rules = {};

  messages = {};

  constructor(rules, messages = {}) {
    super();

    this.rules = rules;
    this.messages = messages || {};
  }

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
  async handle(request, response, next, res) {
    try {
      const validate = ajv.compile(this.rules);
      const valid = validate(request.body);
      if (!valid) {
        throw (validate.errors);
      }
      next();
    } catch (error) {
      return response.status(422).send({ ...error });
    }
  }
}