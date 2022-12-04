import { Router } from "express";
import productFindAllController from "../controllers/product-find-all.controller";
import productFindByIdController from "../controllers/product-find-by-id.controller";
import productCreateController from "../controllers/product-create.controller";
import productDeleteController from "../controllers/product-delete.controller";
import productUpdateController from "../controllers/product-update.controller";

const router = Router();

router.post("/", productCreateController.execute);
router.get("/all", productFindAllController.execute);
router.get("/:id", productFindByIdController.execute);
router.put("/:id", productUpdateController.execute);
router.delete("/:id", productDeleteController.execute);

export const productRoutes = router;
