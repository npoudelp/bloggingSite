const express = require("express");
const { findOne } = require("../models/contactModel");

const router = express.Router();

const Contact = require("../models/contactModel");

router.get("/", async (req, res) => {
  try {
    const contactData = await Contact.find();
    res.json(contactData);
  } catch (error) {
    res.json("Error in post page " + error);
  }
});

router.post("/", async (req, res) => {
  const contactData = new Contact({
    name: req.body.name,
    skill: req.body.skill,
    email: req.body.email,
    message: req.body.message,
  });
  try {
    const saveContact = await contactData.save();
    res.json(contactData.title + " saved sucessfully....");
  } catch (error) {
    res.json("Error posting post " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contactData = await Contact.findByIdAndDelete({ _id: req.params.id });
    res.json(contactData.title + " Deleted Sucessfully");
  } catch (error) {
    res.json("Error deleting post " + error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json("Contact Updated Sucessfully");
  } catch (error) {
    res.json("Error updating contact: " + error);
  }
});

module.exports = router;
