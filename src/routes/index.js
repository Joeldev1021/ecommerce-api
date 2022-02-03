const { Router } = require("express");
const routes = Router();
const categoryRoutes = require("./category.routes");
const productRoutes = require("./products.routes");
const authRoutes = require("./auth.routes");

routes.use("/category", categoryRoutes);
routes.use("/product", productRoutes);
routes.use("/auth", authRoutes);

module.exports = routes;
