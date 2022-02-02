const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    state: {
        type: Boolean,
        default: true,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user is required"]
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "category is required"]
    },
    description: String,

    imgUrl: String,

    available: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Product", ProductSchema);
