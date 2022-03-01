const express = require("express");
const { check } = require("express-validator");
const { getAllUsers, getRoles, deleteUser, updateUser, getUserById } = require("../controllers/user.controller");
const { validUserByID } = require("../helpers");
const { validatorFields, isAdmin } = require("../middleware/validateFields");
const { validateJWT } = require("../middleware/validateJwt");

const router = express.Router();

router.get("/role", getRoles);

router.get("/all", getAllUsers);

router.get("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validUserByID),
    validateJWT,
    validatorFields
], getUserById);

router.put("/:id",
    [
        check("id", "the ID is invalid").isMongoId(),
        check("id").custom(validUserByID),
        validateJWT,
        isAdmin,
        validatorFields
    ],
    updateUser);

router.delete("/:id",
    [
        check("id", "the ID is invalid").isMongoId(),
        check("id").custom(validUserByID),
        validateJWT,
        isAdmin,
        validatorFields
    ],
    deleteUser);

module.exports = router;
