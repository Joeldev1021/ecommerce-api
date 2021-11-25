const express = require("express");
const router = express.Router();

const { createCategory, getCategory, editeCategory, deleteCategory } = require("../controllers/category.controllers");

router.get("/", getCategory);

router.post("/", createCategory);

router.put("/", editeCategory);

router.delete("/", deleteCategory);

module.exports = router;
