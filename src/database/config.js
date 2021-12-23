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
    console.log("Error al conectar a la base de datos");
  }
};

module.exports = { connDb };
