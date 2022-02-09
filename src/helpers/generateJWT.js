const jwt = require("jsonwebtoken");

const generateJWT = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET_KEY_JWT, { expiresIn: 24 * 60 * 60 });
    return token;
};

module.exports = { generateJWT };
