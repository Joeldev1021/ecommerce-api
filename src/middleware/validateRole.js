
const validateRole = async (role = "") => {
    if (!role) {
        throw new Error(`This role: ${role} does not exist`);
    }
};

module.exports = { validateRole };
