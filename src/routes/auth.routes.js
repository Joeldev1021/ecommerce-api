const express = require("express");
const ControllerAuth = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signin", ControllerAuth.signin);

router.post("/signup", ControllerAuth.signup);

module.exports = router;
