const express = require("express");

class Server {
  constructor () {
    this.app = express();
    this.port = process.env.PORT || 3000;

    // connect to the database
    // this.connecMongoDB();

    // // configure the middleware
    // this.middlewares();

    // // configure routes
    // this.routes();
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
