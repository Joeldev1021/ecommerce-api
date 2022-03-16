/* eslint-disable no-unused-vars */
const express = require("express");
const { check } = require("express-validator");
const { getAllUsers, deleteUser, updateUser, getUserById } = require("../controllers/user.controller");
const { validUserByID } = require("../helpers");
const { validateJwt, validatorFields, isAdmin } = require("../middleware/validator");

const router = express.Router();

router.get("/all", getAllUsers);

router.get("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validUserByID),
    validateJwt,
    validatorFields
], getUserById);

router.put("/:id",
    [
        check("id", "the ID is invalid").isMongoId(),
        check("id").custom(validUserByID),
        validateJwt,
        isAdmin,
        validatorFields
    ],
    updateUser);

router.delete("/:id",
    [
        check("id", "the ID is invalid").isMongoId(),
        check("id").custom(validUserByID),
        validateJwt,
        isAdmin,
        validatorFields
    ],
    deleteUser);

module.exports = router;
