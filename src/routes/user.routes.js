const express = require("express");
const { check } = require("express-validator");
const { getAllUsers, createUser, deleteUser, updateUser, getUserById } = require("../controllers/user.controller");
const { validatorRoleDb, validationFields } = require("../helpers/index.js");
const router = express.Router();

router.get("/all", getAllUsers);

router.get("/:id", getUserById)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);

router.post("/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "Password is required").isLength({ min: 3 }),
        validatorRoleDb,
        validationFields
    ],
    createUser);

module.exports = router;
