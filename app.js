const express = require("express");

const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1/blogSiteDB";

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("Database Connected....");
});

const app = express();

const cors = require("cors");

app.use(express.json());

app.use(cors());

const homeRoute = require("./routes/home");
app.use("/", homeRoute);

const postRoute = require("./routes/post");
app.use("/post", postRoute);

const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);

app.listen(8090, () => {
  console.log("Server Started....");
});
