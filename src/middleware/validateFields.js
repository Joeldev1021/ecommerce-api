const { validationResult } = require("express-validator");

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

module.exports = { validatorFields, isAdmin };
