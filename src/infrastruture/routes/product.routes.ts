import { Router } from "express";
import productFindAllController from "../controllers/product/product-find-all.controller";
import productFindByIdController from "../controllers/product/product-find-by-id.controller";
import productCreateController from "../controllers/product/product-create.controller";
import productDeleteController from "../controllers/product/product-delete.controller";
import productUpdateController from "../controllers/product/product-update.controller";

const router = Router();

router.post("/", productCreateController.execute);
router.get("/all", productFindAllController.execute);
router.get("/:id", productFindByIdController.execute);
router.put("/:id", productUpdateController.execute);
router.delete("/:id", productDeleteController.execute);

export const productRoutes = router;
