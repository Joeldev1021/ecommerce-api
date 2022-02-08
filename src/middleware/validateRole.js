const Role = require("../models/role");

const validateRole = async (role = "") => {
    const roleExists = await Role.findOne({ role });

    if (!roleExists) {
        throw new Error(`This role: ${role} does not exist`);
    }
};

module.exports = { validateRole };
