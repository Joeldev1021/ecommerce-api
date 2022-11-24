/* eslint-disable no-unused-vars */
const UserSchema = require("../models/user");
const UserService = require("../services/user.service");

class UserController {
    // get all users
    async getAllUsers (req, res) {
        const users = await UserService.getAllUsers();
        res.json({
            message: "user obtained",
            users
        });
    };

    // get user by id
    async getUserById (req, res) {
        try {
            const { id } = req.params;
            const user = await UserSchema.findById(id);
            res.json(user);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // update user
    async updateUser (req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.updateUser(id, req.body);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // delete user
    async deleteUser (req, res) {
        try {
            const { id } = req.params;
            const user = await UserService.deleteUser(id);
            res.json(`${user.name} deleted`);
        } catch (error) {
            res.json({ message: error });
        }
    };
}

module.exports = new UserController();
