// app.js
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const userRoutes = require("./Routes/userRoutes");
const companyRoutes = require("./routes/companyRoutes.js");
const departmentRoutes = require("./routes/departmentRoutes.js");

app.use("/api", userRoutes, companyRoutes, departmentRoutes);

module.exports = app;
