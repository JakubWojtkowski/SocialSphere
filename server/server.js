const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.DB_CONNECTION_STRING);
mongoose.set("strictQuery", true);

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  postImg: String,
  comments: [{ author: String, body: String, date: Date }],
  date: { type: Date, default: Date.now },
  likes: Number,
});

const userSchema = mongoose.Schema({
  name: String,
  postsIds: [],
  userImage: String,
  email: String,
  password: String,
  followedUsersIds: [],
});

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

app.use(express.json());
app.use(express.static("build"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// posts
app.get("/posts", (req, res) => {
  Post.find({}, (err, foundPosts) => {
    res.send(foundPosts);
  });
});

app.get("/posts/:postId", (req, res) => {
  const requestedPostId = req.params.postId;

  Post.findOne(
    {
      _id: requestedPostId,
    },
    (err, foundPost) => {
      if (!err) {
        res.send();
      }
    }
  );
});

app.post("/posts/addPost", (req, res) => {
  const post = new Post({
    author: req.body.postAuthor,
    title: req.body.postTitle,
    postImg: req.body.postImg,
    comments: [],
    date: { type: Date, default: Date.now },
    likes: 0,
  });

  post.save((err) => {
    if (!err) {
      res.redirect("/");
    }
  });
});

// users
app.get("/users", (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.send(foundUsers);
  });
});

app.get("/users/:id", (req, res) => {
  const requestedPostId = req.params.postId;

  Post.findOne(
    {
      _id: requestedPostId,
    },
    (err, foundPost) => {
      if (!err) {
        res.render();
      }
    }
  );
});

app.post("/users/addUser", (req, res) => {
  const user = new User({
    author: req.body.postAuthor,
    title: req.body.postTitle,
    content: req.body.postContent,
    comments: [],
    date: { type: Date, default: Date.now },
    likes: 0,
  });

  user.save((err) => {
    if (!err) {
      res.redirect("/");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
