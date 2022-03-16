const UserSchema = require("../models/user");
// get user by id
class UserController {
    async getUserById (req, res) {
        try {
            const { id } = req.params;
            const user = await UserSchema.findById(id);
            res.json(user);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // get all users
    async getAllUsers (req, res) {
        try {
            const users = await UserSchema.find().select("-password");
            res.json(users);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // update user
    async updateUser (req, res) {
        try {
            const { id } = req.params;
            const user = await UserSchema.findByIdAndUpdate(id, req.body);
            res.json(`${user.name} updated`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // delete user
    async deleteUser (req, res) {
        try {
            const { id } = req.params;
            const user = await UserSchema.findByIdAndDelete(id);
            res.json(`${user.name} deleted`);
        } catch (error) {
            res.json({ message: error });
        }
    };
}

module.exports = new UserController();
