const express = require("express");
const { getUser, createUser, deleteUser, updateUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

module.exports = router;
