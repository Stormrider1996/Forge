const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Schema = mongoose.Schema;
const urlSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  trueUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  counter: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("url", urlSchema);
