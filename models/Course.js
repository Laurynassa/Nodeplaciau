const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Add title"],
  },
  author: {
    type: String,
    required: [true, "Add author"],
  },
  modules: {
    type: [String],
    required: [true, "At least one module is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
