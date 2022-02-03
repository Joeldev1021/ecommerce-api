const { Schema, model } = require("mongoose");

const RoleSchema = new Schema({
    role: {
        type: String
    }
}, {
    timestamps: false,
    versionKey: false
}
);

module.exports = model("Role", RoleSchema);
