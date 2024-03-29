const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add you name!!:("],
    },
    email: {
      type: String,
      required: [true, "Please provide email!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    role: {
      type: String,
      default: "simple",
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("User", userSchema);
