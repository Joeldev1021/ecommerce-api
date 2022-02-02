const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
    role: {
        type: String
    }
});

module.exports = model("Role", RoleSchema);
