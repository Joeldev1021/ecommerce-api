const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  description: String,

  imgUrl: String,

  available: {
    type: Boolean,
    default: true
  }

});

module.exports = model("Product", ProductSchema);
