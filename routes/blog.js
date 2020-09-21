const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controller/blog");

router.post("/blog/:id/create", createPost);
router.get("/blog", getAllPosts);
router.get("/blog/:id", getPostById);
router.put("/blog/update/:id", updatePost);
router.delete("/blog/delete/:id", deletePost);

module.exports = router;
