const { Router } = require("express");
const routes = Router();
const categoryRoute = require("./category.routes");

routes.use("/category", categoryRoute);

module.exports = routes;
