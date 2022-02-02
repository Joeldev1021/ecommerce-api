const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category.controllers");
router.post("/", CategoryController.createCategory);

router.get("/", CategoryController.getAllCategory);

router.get("/:id", CategoryController.getCategoryById)
    .put("/:id", CategoryController.updateCategory)
    .delete("/:id", CategoryController.deleteCategory);

module.exports = router;
