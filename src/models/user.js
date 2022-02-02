const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    image: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        required: false,
        default: "USER_ROLE",
        enum: ["ADMIN_ROLE", "USER_ROLE", "SUPER_ADMIN_ROLE"]
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("User", UserSchema);
