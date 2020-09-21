const express = require("express");
const Category = require("../models/category");

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  await category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        message: err,
      });
    }
    return res.json({ category });
  });
};

exports.getCategoryById = async (req, res) => {
  await Category.findById(req.params.id).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(category);
  });
};

exports.getAllCategories = async (req, res) => {
  await Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(categories);
  });
};

exports.updateCategory = async (req, res) => {
  await Category.findById(req.params.id)
    .then((category) => {
      category.name = req.body.name;
      category.save((err, updatedCategory) => {
        if (err) {
          return res.status(400).json({
            error: "Cannot update the category",
          });
        }
        return res.json(updatedCategory);
      });
    })
    .catch((err) => console.log(err));
};

exports.deleteCategory = async (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.json({
        message: "Successfully deleted",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCatePosts = async (req, res) => {
  const { id } = req.params;
  let data = [];
  await Category.findById(id)
    .populate("category.name blogs")
    .exec((err, category) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      for (blogId of category.blogs) {
        data.push(blogId);
      }
      return res.json({ data, category });
    });
};
