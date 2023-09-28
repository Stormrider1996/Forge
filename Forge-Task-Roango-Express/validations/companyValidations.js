const { body, param } = require("express-validator");

module.exports = {
  show: [param("company_id").isUUID().withMessage("Invalid company ID")],
  create: [
    body("name").notEmpty().withMessage("Company name is required"),
    body("website").isURL().withMessage("Invalid website URL"),
    body("country").notEmpty().withMessage("Country is required"),
    // Add more validations for other fields as per your requirements
  ],
  update: [
    param("company_id").isUUID().withMessage("Invalid company ID"),
    body("website").optional().isURL().withMessage("Invalid website URL"),
    // Add more validations for other fields as per your requirements
  ],
  delete: [param("company_id").isUUID().withMessage("Invalid company ID")],
};
