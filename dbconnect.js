const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error connecting to database");
  });
