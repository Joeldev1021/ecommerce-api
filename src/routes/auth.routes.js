const express = require("express");
const { check } = require("express-validator");
const { validatorFields } = require("../middleware/validateFields");
const ControllerAuth = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signin", ControllerAuth.signin);

router.post("/signup", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 3 }),
    check("role", "Role is invalid"),
    validatorFields
], ControllerAuth.signup);

module.exports = router;
