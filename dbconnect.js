const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://ojuotimi04:ojuotimi04@testmongodb.lr601dn.mongodb.net/project"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error connecting to database");
  });
