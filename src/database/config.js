const mongoose = require("mongoose");
require("dotenv").config();

const connDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connDb };
