const { body, param } = require("express-validator");

module.exports = {
  show: [param("user_id").isUUID().withMessage("Invalid user ID")],
  create: [
    body("first_name").notEmpty().withMessage("First name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  update: [
    param("user_id").isUUID().withMessage("Invalid user ID"),
    body("email").optional().isEmail().withMessage("Invalid email address"),
  ],
  delete: [param("user_id").isUUID().withMessage("Invalid user ID")],
};
