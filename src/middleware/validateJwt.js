const User = require("../models/user");
const jwt = require("jsonwebtoken");

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

module.exports = { validateJwt };
