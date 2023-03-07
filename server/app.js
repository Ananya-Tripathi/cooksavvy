const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB_url =
  "mongodb+srv://yana:mongodb123@cluster0.v2cxbka.mongodb.net/recipes";

mongoose
  .connect(DB_url)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("no connection");
    console.log(err);
  });

const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/account", middleware, (req, res) => {
  res.send("hello account");
});
app.get("/contact", (req, res) => {
  res.send("hello contact");
});
app.get("/recipes", (req, res) => {
  res.send("hello recipes");
});
app.get("/signin", (req, res) => {
  res.send("hello recipes");
});
app.listen(5000, () => {
  console.log("server started at localhost:5000");
});
