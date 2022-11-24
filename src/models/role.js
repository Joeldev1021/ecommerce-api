const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
    role: {
        type: String,
        unique: true
    }

}, {
    timestamps: false,
    versionKey: false
});

module.exports = model("Role", RoleSchema);
