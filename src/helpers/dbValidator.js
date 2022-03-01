const category = require("../models/category");
const User = require("../models/user");

const validUserByID = async (id) => {
    const userExists = await User.findById(id);

    if (!userExists) {
        throw new Error(`This id: user ${id} does not exist`);
    }
};

const validCategoryByID = async (id) => {
    const categoryExists = await category.findById(id);
    if (!categoryExists) {
        throw new Error(`This id: category ${id} does not exist`);
    }
};

const validateRole = async (role = "") => {
    if (!role) {
        throw new Error(`This role: ${role} does not exist`);
    }
};

module.exports = { validUserByID, validCategoryByID, validateRole };
