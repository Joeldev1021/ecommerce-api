import "reflect-metadata";
import { Router } from "express";
import { authRoutes } from "../../../user/infrastructure/routes/auth.routes";
import { categoryRoutes } from "../../../category/infrastructure/routes/categories.routes";
import { productRoutes } from "../../../product/infrastructure/routes/product.routes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export default router;
