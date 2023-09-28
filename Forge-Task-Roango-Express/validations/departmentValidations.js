const { body, param } = require("express-validator");

module.exports = {
  show: [
    param("department_id").isUUID().withMessage("Invalid department ID"),
    param("company_id").isUUID().withMessage("Invalid company ID"),
  ],
  create: [
    body("name").notEmpty().withMessage("Department name is required"),
    // Add more validations for other fields as per your requirements
  ],
  update: [
    param("department_id").isUUID().withMessage("Invalid department ID"),
    param("company_id").isUUID().withMessage("Invalid company ID"),
    // Add more validations for other fields as per your requirements
  ],
  delete: [
    param("department_id").isUUID().withMessage("Invalid department ID"),
    param("company_id").isUUID().withMessage("Invalid company ID"),
  ],
};
