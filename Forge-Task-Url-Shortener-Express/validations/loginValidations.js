const { check } = require("express-validator");

const loginValidations = [
  check("email").notEmpty().withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
];

module.exports = loginValidations;
