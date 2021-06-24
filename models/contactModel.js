const mongoose = require("mongoose");

const contactModel = mongoose.Schema({
  name: {
    type: String,
  },
  skill: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactModel);
