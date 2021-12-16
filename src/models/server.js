const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const { connDb } = require("../database/config");

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      auth: "/api/auth",
      user: "/api/user",
      categorie: "/api/categorie",
      product: "/api/product"
    };

    // connect to the database
    this.connecMongoDB();

    // configure the middleware
    this.middlewares();

    // // configure routes
    this.routes();
  }

  middlewares () {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  async connecMongoDB () {
    await connDb();
  }

  routes () {
    this.app.use(this.paths.auth, require("../routes/auth.routes"));
    this.app.use(this.paths.categorie, require("../routes/category.routes"));
    this.app.use(this.paths.product, require("../routes/products.routes"));
    this.app.use(this.paths.user, require("../routes/user.routes"));
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
