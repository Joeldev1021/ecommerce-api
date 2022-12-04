import { Router } from "express";
import categoryCreateController from "../controllers/category-create.controller";
import categoryDeleteController from "../controllers/category-delete.controller";
import categoryFindAllController from "../controllers/category-find-all.controller";
import categoryFindByIdController from "../controllers/category-find-by-id-controller";
import categoryUpdateController from "../controllers/category-update.controller";

const router = Router();

router.post("/", categoryCreateController.execute);
router.get("/all", categoryFindAllController.execute);
router.get("/:id", categoryFindByIdController.execute);
router.put("/:id", categoryUpdateController.execute);
router.delete("/:id", categoryDeleteController.execute);

export const categoryRoutes = router;
