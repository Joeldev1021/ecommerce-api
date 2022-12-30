import { Router } from 'express';
import { CategoryCreateController } from '../controllers/category/category-create.controller';
import { CategoryDeleteController } from '../controllers/category/category-delete.controller';
import { CategoryFindAllController } from '../controllers/category/category-find-all.controller';
import { CategoryFindByIdController } from '../controllers/category/category-find-by-id-controller';
import { CategoryUpdateController } from '../controllers/category/category-update.controller';
import { container } from '../dependency-injection/container';
import { containerTypes } from '../dependency-injection/container.types';

const router = Router();

const categoryCreateController = container.resolve<CategoryCreateController>(
	containerTypes.categoryCreateController
);
const categoryFindAllController = container.resolve<CategoryFindAllController>(
	containerTypes.categoryFindAllController
);
const categoryFindByIdController =
	container.resolve<CategoryFindByIdController>('categoryFindByIdController');
const categoryUpdateController = container.resolve<CategoryUpdateController>(
	containerTypes.categoryUpdateController
);
const categoryDeleteController = container.resolve<CategoryDeleteController>(
	CategoryDeleteController
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
