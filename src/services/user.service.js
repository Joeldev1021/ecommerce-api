/* eslint-disable no-unused-vars */
const User = require("../models/user");
class UserService {
    async getAllUsers () {
        try {
            return await User.find();
        } catch (error) {
            return error;
        }
    }

    async getUserById (id) {
        try {
            return await User.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    };

    async updateUser (id, userBody) {
        try {
            return await User.findByIdAndUpdate(id, userBody);
        } catch (error) {
            throw new Error(error);
        }
    };

    async deleteUser (id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    };
}

module.exports = new UserService();
