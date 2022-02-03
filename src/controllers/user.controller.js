const User = require("../models/user");

// get user by id
class UserController {
    async getUserById (req, res) {
        try {
            const { id } = req.params;
            const user = User.findById(id);
            res.json(user);
        } catch (error) {
            res.json({ message: error });
        }
    };

    // get all users
    async getAllUsers (req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async createUser (req, res, next) {
        const { name, email, password, role } = req.body;
        try {
            const userFind = await User.findOne({ email });
            // find user by email
            if (userFind) return res.json({ message: "User already exists" });
            // create new user
            const user = new User({ name, email, password, role });
            const userSave = await user.save();
            console.log("save", userSave);
            res.json(`${userSave.name} created`);
        } catch (error) {
            if (error.code === 11000) res.status(400).json({ message: "The email already exists" });
            next();
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
}

module.exports = new UserController();
