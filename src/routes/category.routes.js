const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const CategoryController = require("../controllers/category.controllers");
const { validateCategoryByID } = require("../helpers");
const { validatorFields } = require("../middleware/validateField");
const { validateJwt } = require("../middleware/validateJwt");
const { isAdmin } = require("../middleware/validateRoles");

router.get("/", CategoryController.getAllCategory);

router.post("/", [
    check("name", "the name is required").not().isEmpty(),
    check("description", "the description is required").not().isEmpty(),
    check("image", "the image is required").not().isEmpty(),
    validatorFields
], CategoryController.createCategory);

router.get("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validateCategoryByID),
    validateJwt,
    validatorFields
], CategoryController.getCategoryById);

router.put("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validateCategoryByID),
    validateJwt,
    isAdmin,
    validatorFields
], CategoryController.updateCategory);

router.delete("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validateCategoryByID),
    validateJwt,
    isAdmin,
    validatorFields
], CategoryController.deleteCategory);

module.exports = router;
