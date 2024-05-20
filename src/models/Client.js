const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const ClientModel = mongoose.model("clients", ClientSchema);

module.exports = ClientModel;
