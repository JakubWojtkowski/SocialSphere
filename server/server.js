const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("ok");
});

// app.post("/post/:id", (res, req) => {
//   const { id } = req.params;
//   const { logo } = req.body;
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
