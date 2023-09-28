const { check } = require("express-validator");

const createUrlValidations = [
  check("trueUrl")
    .notEmpty()
    .withMessage("Url is required")
    .isURL({ require_protocol: true, protocols: ["https"] })
    .withMessage("True Url must be a valid HTTPS link"),
  check("shortUrl").notEmpty().withMessage("New data is required"),
];

const updateUrlValidations = [
  check("shortUrl").notEmpty().withMessage("Short URL is required"),
];

module.exports = {
  createUrlValidations,
  updateUrlValidations,
};
