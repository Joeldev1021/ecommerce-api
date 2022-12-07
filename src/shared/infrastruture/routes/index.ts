import "reflect-metadata";
import { Router } from "express";
import userRegisterController from "../../../user/infrastructure/controller/user-register.controller";
import { CategoryCreateController } from "../../../category/infrastructure/controllers/category-create.controller";
import { container } from "../../../container";
import { ProductCreateController } from "../../../product/infrastructure/controllers/product-create.controller";
const router = Router();

const categoryCreateController = container.resolve("categoryCreateController");

router.use("/user", userRegisterController.execute);
router.post(
  "/category",
  categoryCreateController.execute.bind(categoryCreateController)
);
router.use("/product", ProductCreateController.execute);

export default router;
