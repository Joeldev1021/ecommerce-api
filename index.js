require("dotenv").config();
const { Server } = require("./src/models/index");

const server = new Server();

server.listen();
