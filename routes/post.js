const express = require("express");

const router = express.Router();

const Post = require("../models/postModel");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.find();
    res.json(postData);
  } catch (error) {
    res.json("Error in post page " + error);
  }
});

router.post("/", async (req, res) => {
  const postData = new Post({
    title: req.body.title,
    post: req.body.post,
    tag: req.body.tag,
    author: req.body.author,
    date: req.body.date,
  });
  try {
    const savePost = await postData.save();
    res.json(title + " saved sucessfully....");
  } catch (error) {
    res.json("Error posting post " + error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.findByIdAndDelete({ _id: req.params.id });
    res.json(postData.title + " Deleted Sucessfully");
  } catch (error) {
    res.json("Error deleting post " + error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Post.findByIdAndUpdate({ _id: req.params.id },req.body);
    res.json("Post Updated Sucessfully");
  } catch (error) {
      res.json("Error updating post: "+error);
  }
});

module.exports = router;
