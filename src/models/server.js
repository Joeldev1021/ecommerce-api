const express = require("express");
require("dotenv").config();
const { connDb } = require("../database/config");

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      auth: "/api/auth",
      users: "/api/users",
      categories: "/api/categories",
      products: "/api/products"
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
  }

  async connecMongoDB () {
    await connDb();
  }

  routes () {
    this.app.use(this.paths.auth, require("../routes/auth.routes"));
    this.app.use(this.paths.categories, require("../routes/category.routes"));
    this.app.use(this.paths.products, require("../routes/products.routes"));
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
