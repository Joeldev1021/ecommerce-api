const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["ADMIN_ROLE", "USER_ROLE", "SUPER_ROLE"]
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model("User", UserSchema);
