const express = require("express");
const CompanyVersionHandler = require("../versionHandlers/CompanyVersionHandler");
const companyValidations = require("../Validations/companyValidations");

const router = express.Router();

router.get("/:version/companies", CompanyVersionHandler.paginated);

router.get(
  "/:version/companies/:company_id",
  companyValidations.show,
  CompanyVersionHandler.show
);

router.post(
  "/:version/companies",
  companyValidations.create,
  CompanyVersionHandler.create
);

router.put(
  "/:version/companies/:company_id",
  companyValidations.update,
  CompanyVersionHandler.update
);

router.delete(
  "/:version/companies/:company_id",
  companyValidations.delete,
  CompanyVersionHandler.delete
);

module.exports = router;
