const { Sequelize, Model, DataTypes } = require("sequelize");

const connect = () => {
  const hostName = process.env.DB_HOST;
  const userName = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;
  const dialect = process.env.DB_DIALECT;
  const port = process.env.DB_PORT;

  const sequelizeObject = new Sequelize(database, userName, password, {
    host: hostName,
    port: port,
    dialect: dialect,
  });

  const db = {};
  db.sequelize = sequelizeObject;
  db.users = require("../models/User")(sequelizeObject, DataTypes, Model);
  db.companies = require("../models/Company")(
    sequelizeObject,
    DataTypes,
    Model
  );
  db.departments = require("../models/CompanyDepartment")(
    sequelizeObject,
    DataTypes,
    Model
  );
  db.departmentDbView = require("../models/ViewCompanyDepartment")(
    sequelizeObject,
    DataTypes,
    Model
  );
  return db;
};

module.exports = {
  connect,
};
