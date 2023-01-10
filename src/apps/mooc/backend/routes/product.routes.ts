import { Router } from 'express';
import { ProductCreateController } from '../controllers/product/product-create.controller';
import { ProductDeleteController } from '../controllers/product/product-delete.controller';
import { ProductFindAllController } from '../controllers/product/product-find-all.controller';
import { ProductFindByIdController } from '../controllers/product/product-find-by-id.controller';
import { ProductUpdateController } from '../controllers/product/product-update.controller';
import { CONTAINER_TYPES } from '../dependency-injection/container.types';
import { container } from '../dependency-injection/container';

const router = Router();

const productFindAllController = container.get<ProductFindAllController>(
	CONTAINER_TYPES.productFindAllController
);
const productFindByIdController = container.get<ProductFindByIdController>(
	CONTAINER_TYPES.productFindByIdController
);
const productCreateController = container.get<ProductCreateController>(
	CONTAINER_TYPES.productCreateController
);
const productDeleteController = container.get<ProductDeleteController>(
	CONTAINER_TYPES.productDeleteController
);
const productUpdateController = container.get<ProductUpdateController>(
	CONTAINER_TYPES.productUpdateController
);

router.post('/', productCreateController.execute.bind(productCreateController));
router.get(
	'/all',
	productFindAllController.execute.bind(productFindAllController)
);
router.get(
	'/:id',
	productFindByIdController.execute.bind(productFindByIdController)
);
router.put(
	'/:id',
	productUpdateController.execute.bind(productUpdateController)
);
router.delete(
	'/:id',
	productDeleteController.execute.bind(productDeleteController)
);

export const productRoutes = router;
