const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    index: { unique: true },
  },
  refreshToken: String,
  emailVerifiedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
