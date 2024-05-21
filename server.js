const express = require("express");
const BodyParser = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const ClientModel = require("./src/models/Client");

const app = express();

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(morgan("tiny"));
app.use(BodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Response gotten successfully...");
});

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  ClientModel.create({
    name,
    email,
    subject,
    message,
  })
    .then((client) => console.log(res.json(client)))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
