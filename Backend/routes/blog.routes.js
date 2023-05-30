const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { BlogModel } = require("../models/Blog.model");
const { UserModel } = require("../models/User.model");
const blog = express.Router();

blog.get("/", async (req, res) => {
  try {
    const data = await BlogModel.find({ authorID: req.body.authorID });
    res.status(200).send(data);
  } catch (err) {
    res.status(501).send({ error: "failed to fetch the data" });
  }
});

// routes for getting all created blogs of a particular user
blog.get("/:id", async (req, res) => {
  try {
    const data = await BlogModel.findOne({ _id: req.params.id });
    if (data.authorID === req.body.authorID) {
      res.status(200).send(data);
    } else {
      res.status(401).send({ Error: "You are not authorized" });
    }
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});

// routes for creating a blog by a particular user
blog.post("/add", async (req, res) => {
  const apple = await BlogModel.findOne({
    authorID: req.body.authorID,
    title: req.body.title,
  });
  console.log(apple);
  try {
    if (apple) {
      await BlogModel.findByIdAndUpdate({ _id: apple._id }, req.body);
      res.status(201).send("Autosave is working");
    } else {
      const data = new BlogModel(req.body);
      await data.save();
      res.status(201).send({ success: "blog has been added" });
    }
  } catch (error) {
    res.status(501).send({ error: error.message });
  }
});

//routes for editing a blog by a particular user
blog.patch("edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BlogModel.findOne({ _id: id });
    if (data.authorID === req.body.authorID) {
      await BlogModel.findByIdAndUpdate({ _id: id }, req.body);
      res.status(201).send({ Success: "Notes has been updated" });
    } else {
      res
        .status(401)
        .send({ Error: "you are not authorized to update this note" });
    }
  } catch (error) {
    res.status(304).send({ error: "failed to update the Note" });
  }
});

//routes for delete a blog by a particular user
blog.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BlogModel.findOne({ _id: id });
    if (data.authorID === req.body.authorID) {
      await BlogModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ success: "Note has been deleted" });
    } else {
      res
        .status(401)
        .send({ Error: "you are not authorized to delete this note" });
    }
  } catch (error) {
    res.status(501).send({ error: "failed to delete the Note" });
  }
});

module.exports = {
  blog,
};
