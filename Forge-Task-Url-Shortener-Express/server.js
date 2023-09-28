require("dotenv").config();
const dbConnect = require("./config/db.config");
const mongoose = require("mongoose");
const express = require("express");
const shortUrlController = require("./controllers/shortUrlController");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer"); // Import the nodemailer module
const app = express();
const port = 3000;

// Connect to MongoDB
dbConnect();

app.use(express.json());
app.use(cookieParser());

// Create the transporter
global.nodemailerTransporter = nodemailer.createTransport({
  host: process.env.MAILTRAPHOST,
  port: process.env.MAILTRAPPORT,
  auth: {
    user: process.env.MAILTRAPUSER,
    pass: process.env.MAILTRAPPASS,
  },
});

app.get("/:shortUrl", shortUrlController.redirectToLongUrl);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const apiRoutes = require("./routes/api");
app.use("/api/url-shortener", apiRoutes);

// Mongoose connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server is running on port ${port}`));
});
