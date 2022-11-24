const Category = require("../models/category");
const User = require("../models/user");
const Product = require("../models/product");
const Role = require("../models/role");
const jwt = require("jsonwebtoken");

const validUserByID = async (id) => {
    const userExists = await User.findById(id);

    if (!userExists) {
        throw new Error(`This id: user ${id} does not exist`);
    }
};

const validateCategoryByID = async (id) => {
    const categoryExists = await Category.findById(id);
    if (!categoryExists) {
        throw new Error(`This id: category ${id} does not exist`);
    }
};

const validateProductByID = async (id) => {
    const productExists = await Product.findById(id);
    if (!productExists) {
        throw new Error(`This id: product ${id} does not exist`);
    }
};

const generateJWT = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET_KEY_JWT, {
        expiresIn: "24h"
    });
    return token;
};

const destroyJwt = (id) => {
    const res = jwt.sign({ id }, process.env.SECRET_KEY_JWT, { expiresIn: 1 });
    return res;
};

const isValidUpdateRole = (role = "") => {
    const roles = ["ADMIN_ROLE", "USER_ROLE"];

    if (!role === "") {
        if (!roles.includes(role)) {
            throw new Error(`This role: ${role} does not exist in DB`);
        }
    }
};

const validateRole = async (role = "") => {
    const resultRole = await Role.findOne({ role });
    if (!resultRole) {
        throw new Error(`This role: ${role} does not exist in DB`);
    }
};

module.exports = {
    validUserByID,
    validateCategoryByID,
    validateProductByID,
    validateRole,
    generateJWT,
    destroyJwt,
    isValidUpdateRole
};
