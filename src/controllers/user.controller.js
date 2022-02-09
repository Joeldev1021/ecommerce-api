const User = require("../models/user");
const Role = require("../models/role");

// get user by id
class UserController {
    async getUserById (req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            res.json(user);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // get all users
    async getAllUsers (req, res) {
        try {
            const users = await User.find().select("-password");
            res.json(users);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async updateUser (req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndUpdate(id, req.body);
            res.json(`${user.name} updated`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async deleteUser (req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id);
            res.json(`${user.name} deleted`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async getRoles (req, res) {
        const roles = await Role.find();
        res.json(roles);
    }
}

module.exports = new UserController();
