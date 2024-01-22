const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const data = require("./posts.json");
const users = require("./users.json");
require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

mongoose.set("strictQuery", true);

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  content: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  likes: Number,
});

const Post = mongoose.model("Post", postSchema);

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

app.get("/users", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", function (err, data) {
    res.send(data);
  });
});

app.get("/user/:id/followed", (req, res) => {
  const id = req.params.id;
});

app.post("/", (req, res) => {
  let loggedInUser = null;
  for (const user of users) {
    if (user.email === req.body.email && user.password === req.body.password) {
      loggedInUser = user;
      break;
    }
  }

  res.send(loggedInUser);
});

app.post("/post", (req, res) => {
  const post = {
    user: "",
    userImage: "",
    date: "22.01.2024",
    title: req.body.title,
    postImage: req.body.postImage,
    like: "",
    comments: [],
  };

  fs.readFile("posts.json", function (err, data) {
    var json = JSON.parse(data);
    json.push(post);
    fs.writeFile("posts.json", JSON.stringify(json), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
