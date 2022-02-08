/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-undef */
const express = require("express");
const { check } = require("express-validator");
const ControllerAuth = require("../controllers/auth.controller");
const { validateRole } = require("../middleware/validateRole");
const validateFields = require("../middleware/validateFields");

const router = express.Router();

router.post("/signin", ControllerAuth.signin);

router.post("/signup", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 3 }),
    check("role").custom(validateRole),
    validateFields
], ControllerAuth.signup);

module.exports = router;
