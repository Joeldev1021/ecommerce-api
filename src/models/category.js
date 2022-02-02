const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }

});

module.exports = model("Category", CategorySchema);
