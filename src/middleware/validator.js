const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validatorFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};

const isAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role === "ADMIN_ROLE") {
        next();
    } else {
        return res.status(401).json({ message: "not authorized" });
    }
};

const validateJwt = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY_JWT);
        const user = await User.findById(id, { password: 0 });
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Is not login" });
    }
};

module.exports = { validatorFields, isAdmin, validateJwt };
