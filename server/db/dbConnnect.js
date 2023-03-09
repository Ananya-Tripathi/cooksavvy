const mongoose = require("mongoose");
const DB_url = process.env.DATABASE;
mongoose
  .connect(DB_url)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log("no connection");
    console.log(err);
  });