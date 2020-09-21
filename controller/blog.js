const express = require("express");
const Blog = require("../models/blog");
const Category = require("../models/category");

exports.createPost = async (req, res) => {
  const { id } = req.params;
  const blog = new Blog(req.body);
  await blog.save((err, blog) => {
    if (err) {
      return res.status(400).json({
        message: err,
      });
    }
    console.log("Blog saved");
    res.json(blog);
  });
  const category = await Category.findById(id);
  await category.blogs.push(blog);
  category.save(() => {
    console.log("SAVED IN CATEGORY SUCCESSFULLY");
  });
};

exports.getAllPosts = (req, res) => {
  Blog.find()
    .then((posts) => {
      if (posts) {
        return res.json(posts);
      }
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    await Blog.findById(id).exec((err, post) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.json(post);
    });
  } catch (error) {
    return res.json({ error });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, updatedBlog) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        message: "Successfully Updated",
        updatedBlog,
      });
    }
  );
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete({ _id: id }, (err, deletedPost) => {
    if (err) {
      return res.status(400).json({
        error: err,
        message: "Cant delete Post",
      });
    }
    res.json({
      message: "SUCCESS",
    });
  });
};
