const mongoose = require("mongoose");
const Category = require("./category");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 300,
      trim: true,
    },
    markdown: {
      type: String,
      trim: true,
      maxlength: 2147483647,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
