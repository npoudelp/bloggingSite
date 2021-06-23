const mongoose = require("mongoose");

const postModel = mongoose.Schema({
  title: {
    type: String,
  },
  post: {
    type: String,
  },
  tag: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Post", postModel);