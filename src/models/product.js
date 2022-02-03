const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "name is required"]
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
    description: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"],
        default: 0
    }

}, {
    timestamps: false,
    versionKey: false
});

module.exports = model("Product", ProductSchema);
