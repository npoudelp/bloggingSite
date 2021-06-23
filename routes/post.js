const express = require("express");

const router = express.Router();

const Post = require("../models/postModel");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.find();
    res.send(postData);
  } catch (error) {
    res.send("Error in post page " + error);
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
    res.send(savePost);
  } catch (error) {
    res.send("Error posting post " + error);
  }
});

router.delete("/:id", async (req, res)=> {
    try {
        const postData = await Post.findByIdAndDelete({_id: req.params.id});
        res.send("Post Deleted Sucessfully");
    } catch (error) {
        res.send("Error deleting post "+ error);
    }
})

module.exports = router;
