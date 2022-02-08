
const express = require("express");
const { getAllUsers, deleteUser, updateUser, getUserById } = require("../controllers/user.controller");

const router = express.Router();

router.get("/all", getAllUsers);

router.get("/:id", getUserById)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);

module.exports = router;
