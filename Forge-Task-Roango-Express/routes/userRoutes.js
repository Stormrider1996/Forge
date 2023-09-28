const express = require("express");
const UserVersionHandler = require("../versionHandlers/UserVersionHandler");
const userValidations = require("../Validations/userValidations");

const router = express.Router();

router.get("/:version/users", UserVersionHandler.paginated);

router.get(
  "/:version/users/:user_id",
  userValidations.show,
  UserVersionHandler.show
);

router.post(
  "/:version/users",
  userValidations.create,
  UserVersionHandler.create
);

router.put(
  "/:version/users/:user_id",
  userValidations.update,
  UserVersionHandler.update
);

router.delete(
  "/:version/users/:user_id",
  userValidations.delete,
  UserVersionHandler.delete
);

module.exports = router;
