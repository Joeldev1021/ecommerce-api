import { Router } from 'express';
import { CategoryCreateController } from '../controllers/category/category-create.controller';
import { CategoryDeleteController } from '../controllers/category/category-delete.controller';
import { CategoryFindAllController } from '../controllers/category/category-find-all.controller';
import { CategoryFindByIdController } from '../controllers/category/category-find-by-id.controller';
import { CategoryFindCounterController } from '../controllers/category/category-find-counter.controller';
import { CategoryUpdateController } from '../controllers/category/category-update.controller';
import { container } from '../dependency-injection/container';
import { CONTAINER_TYPE } from '../dependency-injection/container.types';

const router = Router();

const categoryCreateController = container.resolve<CategoryCreateController>(
	CONTAINER_TYPE.categoryCreateController
);
const categoryFindAllController = container.resolve<CategoryFindAllController>(
	CONTAINER_TYPE.categoryFindAllController
);
const categoryFindByIdController =
	container.resolve<CategoryFindByIdController>(
		CONTAINER_TYPE.categoryFindByIdController
	);

const categoryUpdateController = container.resolve<CategoryUpdateController>(
	CONTAINER_TYPE.categoryUpdateController
);
const categoryDeleteController = container.resolve<CategoryDeleteController>(
	CONTAINER_TYPE.categoryDeleteController
);

const categoryFindCounterController =
	container.resolve<CategoryFindCounterController>(
		CONTAINER_TYPE.categoryFindCounterController
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
