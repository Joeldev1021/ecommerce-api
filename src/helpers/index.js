const { generateJWT, destroyJwt, validateCategoryByID, validateProductByID, validUserByID, validateRole } = require("./dbValidator");

module.exports = {
    validateProductByID,
    validateCategoryByID,
    validUserByID,
    validateRole,
    generateJWT,
    destroyJwt
};
