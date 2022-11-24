const { Router } = require("express");
const routes = Router();
const categoryRoutes = require("./category.routes");
const productRoutes = require("./products.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const roleRoutes = require("./role.routes");

routes.use("/product", productRoutes);

routes.use("/category", categoryRoutes);

routes.use("/auth", authRoutes);

routes.use("/user", userRoutes);

routes.use("/role", roleRoutes);

module.exports = routes;
