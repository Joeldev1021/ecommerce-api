const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
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
    timestamps: false,
    versionKey: false
});

UserSchema.methods.enCryptPassword = async function (password) {
    return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparedPassword = async function (password) {
    return await bcrypt.compareSync(password, this.password);
};

module.exports = model("User", UserSchema);
