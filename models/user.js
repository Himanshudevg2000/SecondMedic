const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  email: String,
  roll_no: String,
  contact: String,
  address: String,
  zipcode: String,
  country: String,
  state: String,
  city: String,
  class: String,
  subject: String,
  section: String,
});

module.exports = mongoose.model("User", User);
