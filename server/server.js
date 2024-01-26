const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION_STRING);

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
        res.send(foundPost);
      }
    }
  );
});

app.post("/posts/addPost", async (req, res) => {
  const post = new Post({
    author: req.body.author,
    title: req.body.title,
    postImg: req.body.postImage,
    comments: req.body.comments,
    date: { type: Date, default: Date.now },
    likes: req.body.likes,
  });

  await post.save((err, doc) => {
    if (!err) {
      console.log(doc);
    }
  });
});

app.patch("/posts/update/:id", async (req, res) => {
  const postId = req.params.id;
  const updateFields = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, updateFields, {
      new: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("posts/:postId", async (req, res) => {
  try {
    // ...
  } catch (error) {
    res.status(500).send(error);
  }
});

// users
app.get("/users", (req, res) => {
  User.find({}, (err, foundUsers) => {
    res.send(foundUsers);
  });
});

app.get("/users/:id", (req, res) => {
  const requestedUserId = req.params.userId;

  User.findOne(
    {
      _id: requestedUserId,
    },
    (err, foundUser) => {
      if (!err) {
        res.send();
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

// login
app.post("/login", (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    function (err, doc) {
      if (doc && !err) {
        res.send(doc);
      } else {
        res.send("err");
        console.log("Error logging in!");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
