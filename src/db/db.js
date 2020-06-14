const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect("your db connection string", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((client) => {
      console.log("Database is connected");
    })
    .catch((error) => {
      console.log("Not able to connect Database", error.message);
    });
};

module.exports = connectDb;
