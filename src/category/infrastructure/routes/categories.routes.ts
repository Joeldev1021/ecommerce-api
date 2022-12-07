import { Router } from "express";
import { container } from "../../../container";

const router = Router();

const categoryCreateController = container.resolve("categoryCreateController");
const categoryFindAllController = container.resolve(
  "categoryFindAllController"
);
const categoryFindByIdController = container.resolve(
  "categoryFindByIdController"
);
const categoryUpdateController = container.resolve("categoryUpdateController");
const categoryDeleteController = container.resolve("categoryDeleteController");

router.post(
  "/",
  categoryCreateController.execute.bind(categoryCreateController)
);

router.get(
  "/all",
  categoryFindAllController.execute.bind(categoryFindAllController)
);
router.get(
  "/:id",
  categoryFindByIdController.execute.bind(categoryFindByIdController)
);
router.put(
  "/:id",
  categoryUpdateController.execute.bind(categoryUpdateController)
);
router.delete(
  "/:id",
  categoryDeleteController.execute.bind(categoryDeleteController)
);

export const categoryRoutes = router;
