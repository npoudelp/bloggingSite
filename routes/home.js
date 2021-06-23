const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send("This is home");
  } catch (error) {
    res.send("Error in home page " + error);
  }
});

module.exports = router;
