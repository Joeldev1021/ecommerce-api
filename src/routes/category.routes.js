const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const CategoryController = require("../controllers/category.controllers");
const { validCategoryByID } = require("../helpers");
const { validatorFields, validateJwt, isAdmin } = require("../middleware/validatetor");

router.get("/", CategoryController.getAllCategory);

router.post("/", [
    check("name", "the name is required").not().isEmpty(),
    check("description", "the description is required").not().isEmpty(),
    check("image", "the image is required").not().isEmpty(),
    validatorFields
], CategoryController.createCategory);

router.get("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validCategoryByID),
    validateJwt,
    validatorFields
], CategoryController.getCategoryById);

router.put("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validCategoryByID),
    validateJwt,
    isAdmin,
    validatorFields
], CategoryController.updateCategory);

router.delete("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validCategoryByID),
    validateJwt,
    isAdmin,
    validatorFields
], CategoryController.deleteCategory);

module.exports = router;
