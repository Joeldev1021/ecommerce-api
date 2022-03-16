const UserSchema = require("../models/user");
const { generateJWT, destroyJwt } = require("../helpers");

class AuthController {
    async signup (req, res) {
        try {
            const userFind = await UserSchema.findOne({ email: req.body.email });
            if (userFind) return res.json({ message: `user already not exit ${userFind.email}` });
            const user = new UserSchema(req.body);
            user.password = await user.enCryptPassword(user.password);
            const userSave = await user.save();
            res.json(userSave);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async signin (req, res) {
        try {
            const user = await UserSchema.findOne({ email: req.body.email });
            if (!user) return res.json({ message: "user not found" });
            const isPassword = await user.comparedPassword(req.body.password);
            if (!isPassword) return res.json({ message: "password or email incorret" });
            const jwt = generateJWT(user.id);
            res.json({
                message: "signin success",
                jwt
            });
        } catch (error) {
            res.json({ message: error });
        }
    };

    async signout (req, res) {
        const logout = destroyJwt(req.user.id);
        if (logout) return res.json({ message: "logout success" });
        res.json({ message: "logout fail" });
    }
}

module.exports = new AuthController();
