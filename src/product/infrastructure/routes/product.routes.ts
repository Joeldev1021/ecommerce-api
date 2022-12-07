import { Router } from "express";
import { container } from "../../../container";

const productFindAllController = container.resolve("productFindAllController");
const productFindByIdController = container.resolve(
  "productFindByIdController"
);
const productCreateController = container.resolve("productCreateController");
const productDeleteController = container.resolve("productDeleteController");
const productUpdateController = container.resolve("productUpdateController");

const router = Router();

router.post("/", productCreateController.execute.bind(productCreateController));
router.get(
  "/all",
  productFindAllController.execute.bind(productFindAllController)
);
router.get(
  "/:id",
  productFindByIdController.execute.bind(productFindByIdController)
);
router.put(
  "/:id",
  productUpdateController.execute.bind(productUpdateController)
);
router.delete(
  "/:id",
  productDeleteController.execute.bind(productDeleteController)
);

export const productRoutes = router;
