const { check } = require("express-validator");

const registerValidations = [
  check("username").notEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = registerValidations;
