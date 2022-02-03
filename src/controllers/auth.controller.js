const UserSchema = require("../models/user");

class AuthController {
    async signup (req, res) {
        const userFind = await UserSchema.findOne({ email: req.body.email });
        if (!userFind) return res.json({ message: `user already not exit ${userFind.email}` });
        const user = new UserSchema(req.body);
        user.password = await user.enCryptPassword(user.password);
        await user.save();
        res.json(user);
    };

    async signin (req, res) {
        const user = await UserSchema.findOne({ email: req.body.email });
        if (!user) return res.json({ message: "user not found" });
        const result = await user.comparedPassword(req.body.password);
        console.log(result);
        res.json(user);
    };
}

module.exports = new AuthController();
