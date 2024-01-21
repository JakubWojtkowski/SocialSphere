const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const data = require("./posts.json");
const users = require("./users.json");
require("dotenv").config();
const fs = require("fs");

app.use(express.json());
app.use(express.static("build"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  fs.readFile(__dirname + "/" + "posts.json", function (err, data) {
    res.send(data);
  });
});

app.post("/", (req, res) => {
  let loggedInUser = null;
  for (const user of users) {
    if (user.email === req.body.email && user.password === req.body.password) {
      loggedInUser = user;
      break;
    }
  }

  if (loggedInUser) {
    res
      .status(200)
      .json({ message: "Zalogowano pomyślnie", user: loggedInUser });
  } else {
    res.status(401).json({ message: "Błędne dane logowania" });
  }
});

app.post("/post", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
