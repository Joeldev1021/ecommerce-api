const express = require("express");
const { check } = require("express-validator");
const ControllerAuth = require("../controllers/auth.controller");
const { validateRole } = require("../helpers");
const { validatorFields } = require("../middleware/validateField");
const { validateJwt } = require("../middleware/validateJwt");

const router = express.Router();

router.post("/signin", ControllerAuth.signin);

router.post("/signup", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 3 }),
    check("role").custom(validateRole),
    validatorFields
], ControllerAuth.signup);

router.post("/signout", validateJwt, ControllerAuth.signout);

module.exports = router;
