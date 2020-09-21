const express = require("express");

const {
  createCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCatePosts,
} = require("../controller/category");

const router = express.Router();

router.post("/category/create", createCategory);
router.get("/category/:id/posts", getCatePosts);
router.get("/allCategories", getAllCategories);
router.get("/category/:id", getCategoryById);
router.put("/category/update/:id", updateCategory);
router.delete("/category/delete/:id", deleteCategory);

module.exports = router;
