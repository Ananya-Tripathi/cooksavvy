const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

const dbConnect = require("./db/dbConnnect.js");

app.use(express.json);
// linking routes
app.use(require("./route/auth.js"));
const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("hello from app");
// });
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
app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`);
});