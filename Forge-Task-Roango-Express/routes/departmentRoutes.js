const express = require("express");
const DepartmentVersionHandler = require("../versionHandlers/DepartmentsVersionHandler");
const departmentValidation = require("../Validations/departmentValidations");

const router = express.Router();

router.get(
  "/:version/companies/:company_id/departments/:department_id",
  departmentValidation.show,
  DepartmentVersionHandler.show
);

router.get(
  "/:version/companies/:company_id/departments",
  DepartmentVersionHandler.list
);

router.post(
  "/:version/companies/:company_id/departments",
  departmentValidation.create,
  DepartmentVersionHandler.create
);

router.put(
  "/:version/companies/:company_id/departments/:department_id",
  departmentValidation.update,
  DepartmentVersionHandler.update
);

router.delete(
  "/:version/companies/:company_id/departments/:department_id",
  departmentValidation.delete,
  DepartmentVersionHandler.delete
);

module.exports = router;
