import { Router } from 'express';
import { CategoryCreateController } from '../controllers/category/category-create.controller';
import { CategoryDeleteController } from '../controllers/category/category-delete.controller';
import { CategoryFindAllController } from '../controllers/category/category-find-all.controller';
import { CategoryFindByIdController } from '../controllers/category/category-find-by-id.controller';
import { CategoryFindCounterController } from '../controllers/category/category-find-counter.controller';
import { CategoryUpdateController } from '../controllers/category/category-update.controller';
import { container } from '../dependency-injection/container';
import { CONTAINER_TYPES } from '../dependency-injection/container.types';

const router = Router();

const categoryCreateController = container.get<CategoryCreateController>(
	CONTAINER_TYPES.categoryCreateController
);

const categoryFindAllController = container.get<CategoryFindAllController>(
	CONTAINER_TYPES.categoryFindAllController
);
const categoryFindByIdController = container.get<CategoryFindByIdController>(
	CONTAINER_TYPES.categoryFindByIdController
);

const categoryUpdateController = container.get<CategoryUpdateController>(
	CONTAINER_TYPES.categoryUpdateController
);
const categoryDeleteController = container.get<CategoryDeleteController>(
	CONTAINER_TYPES.categoryDeleteController
);

const categoryFindCounterController =
	container.get<CategoryFindCounterController>(
		CONTAINER_TYPES.categoryFindCounterController
	);

router.get(
	'/counter',
	categoryFindCounterController.execute.bind(categoryFindCounterController)
);

router.post(
	'/',
	categoryCreateController.execute.bind(categoryCreateController)
);
router.get(
	'/all',
	categoryFindAllController.execute.bind(categoryFindAllController)
);

router.get(
	'/:id',
	categoryFindByIdController.execute.bind(categoryFindByIdController)
);
router.put(
	'/:id',
	categoryUpdateController.execute.bind(categoryUpdateController)
);
router.delete(
	'/:id',
	categoryDeleteController.execute.bind(categoryDeleteController)
);

export const categoryRoutes = router;
