import { Router } from "express";
import userRegisterController from "../../../user/infrastructure/controller/user-register.controller";
import productCreateController from "../../../product/infrastructure/controllers/product-create.controller";
import categoryCreateController from "../../../category/infrastructure/controllers/category-create.controller";
const router = Router();

router.use("/user", userRegisterController.execute);
router.post("/category", categoryCreateController.execute);
router.use("/product", productCreateController.execute);

export default router;
