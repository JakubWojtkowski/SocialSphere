const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const data = require("./posts.json");
const users = require("./users.json");
require("dotenv").config();
const fs = require("fs");
const { error } = require("console");

app.use(express.json());
app.use(express.static("build"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT;

function checkUser(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      console.log("tak");
      return 1;
    } else {
      return 0;
    }
  }
}

app.get("/api", (req, res) => {
  fs.readFile(__dirname + "/" + "posts.json", function (err, data) {
    res.send(data);
  });
});

app.post("/login", (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  const response = checkUser(data.email, data.password);
  if (response) {
    res.redirect("/MainArea");
  }
});

app.post("/post", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
