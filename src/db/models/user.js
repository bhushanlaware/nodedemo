const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      minLength: 3,
    },
    lname: {
      type: String,
      minLength: 3,
    },
    email: {
      type: String,
      minLength: 3,
      unique: true,
    },
    password: {
      type: String,
      minLength: 3,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("User", userSchema);

module.exports = user;
