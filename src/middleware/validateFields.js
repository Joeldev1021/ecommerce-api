const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { validationResult } = require("express-validator");

const validatorFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const { id } = await jwt.verify(token, process.env.SECRET_KEY_JWT);
        const user = await User.findById(id, { password: 0 });
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Is not login" });
    }
};

const isAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role === "ADMIN_ROLE" || user.role === "SUPER_ADMIN_ROLE") {
        next();
    } else {
        return res.status(401).json({ message: "not authorized" });
    }
};

module.exports = { validatorFields, isAdmin, validateJWT };
