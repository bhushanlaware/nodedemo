const express = require("express");
const app = express();
const connectDb = require("./db/db");
connectDb();
app.use(express.json());
app.use("/users", require("./routes/user"));
module.exports = app;
