/* eslint-disable no-unused-vars */
const express = require("express");
const { check } = require("express-validator");
const UserController = require("../controllers/user.controller");
const { validUserByID, validateRole } = require("../helpers");
const { isRole, isAdmin } = require("../middleware/validateRoles");
const { validatorFields } = require("../middleware/validateField");
const { validateJwt } = require("../middleware/validateJwt");
const router = express.Router();

router.get("/all", UserController.getAllUsers);

router.get("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validUserByID),
    validateJwt,
    validatorFields
], UserController.getUserById);

router.put("/:id",
    [
        check("id", "the ID is invalid").isMongoId(),
        check("id").custom(validUserByID),
        validateJwt,
        isAdmin,
        validatorFields
    ],
    UserController.updateUser);

router.delete("/:id",
    [
        check("id", "the ID is invalid").isMongoId(),
        check("id").custom(validUserByID),
        validateJwt,
        isAdmin,
        validatorFields
    ],
    UserController.deleteUser);

module.exports = router;
