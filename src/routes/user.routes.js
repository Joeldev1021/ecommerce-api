
const express = require("express");
const { getAllUsers, getRoles, deleteUser, updateUser, getUserById } = require("../controllers/user.controller");
const { isAdmin, validateJWT } = require("../middleware/validateFields");

const router = express.Router();

router.get("/role", getRoles);
router.get("/all", getAllUsers);

router.get("/:id",
    validateJWT,
    isAdmin,
    getUserById
)
    .put("/:id", updateUser)
    .delete("/:id",

        deleteUser);

module.exports = router;
