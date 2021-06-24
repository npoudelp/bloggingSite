const express = require("express");
const { updateOne } = require("../models/homeModel");

const router = express.Router();

const Home = require("../models/homeModel");

router.get("/", async (req, res) => {
  try {
    const homeData = await Home.find();
    res.json(homeData);
  } catch (error) {
    res.json("Error in home page " + error);
  }
});

router.post("/", async (req, res) => {
  const homeData = await new Home({
    site: req.body.site,
    owner: req.body.owner,
    quote: req.body.quote,
  });
  try {
    const homeSave = await homeData.save();
    res.json(homeSave.site + " saved sucessfully....");
  } catch (error) {
    res.json("Error posting home data " + error);
  }
});

router.delete("/:id", async (req, res) => {
  const homeData = await Home.findByIdAndDelete({ _id: req.params.id });
  res.json(homeData.site + " Deleted Sucessfully....");
});

router.put("/:id", async (req, res) => {
  try {
    await Home.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json("Data Updated Sucessfully");
  } catch (error) {
    res.json("Error updating home: " + error);
  }
});

module.exports = router;
