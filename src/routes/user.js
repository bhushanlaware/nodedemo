const express = require("express");
const User = require("../db/models/user");
const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  try {
    const skip = req.params.skip || 0;
    const limit = req.params.limit || 100;
    const users = await User.find({}).skip(skip).limit(limit);
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRoutes.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

userRoutes.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await User.findByIdAndUpdate(_id, req.body);
    res.send("Updated User.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

userRoutes.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await User.findByIdAndDelete(_id);
    res.send("Deleted User.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = userRoutes;
