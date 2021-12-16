const express = require("express");
const { check } = require("express-validator");
const { getUser, createUser, deleteUser, updateUser } = require("../controllers/user.controller");
const { validatorRoleDb, validationFields } = require("../helpers/index.js");
const router = express.Router();

router.get("/", getUser);

router.post("/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 3 }),
    check("role").custom(validatorRoleDb),
    validationFields
  ],
  createUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

module.exports = router;
