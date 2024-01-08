const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const data = require("./posts.json");
require("dotenv").config();

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
