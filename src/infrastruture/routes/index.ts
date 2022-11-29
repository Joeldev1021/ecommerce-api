import { Router } from "express";
import userRegisterController from "../controllers/auth/user-register.controller";
import categoryCreateController from "../controllers/category/category-create.controller";
import productCreateController from "../controllers/product/product-create.controller";
const router = Router();

router.use("/user", userRegisterController.execute);
router.post("/category", categoryCreateController.execute);
router.use("/product", productCreateController.execute);

export default router;
