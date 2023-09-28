const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const tokenActionSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  entity_id: {
    type: String,
    required: true,
  },
  action_name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  executed_at: {
    type: Date,
    default: null,
  },
  expires_at: {
    type: Date,
    default: () => Date.now() + 900000,
  },
});

module.exports = mongoose.model("TokenAction", tokenActionSchema);
