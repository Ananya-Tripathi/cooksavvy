const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from router");
});

router.post("/register", (req, res) => {
  console.log(req.body);
});
module.exports = router;