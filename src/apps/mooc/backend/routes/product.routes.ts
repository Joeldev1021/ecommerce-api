import { Router } from 'express';
import { container } from 'tsyringe';
import { ProductCreateController } from '../controllers/product/product-create.controller';
import { ProductDeleteController } from '../controllers/product/product-delete.controller';
import { ProductFindAllController } from '../controllers/product/product-find-all.controller';
import { ProductFindByIdController } from '../controllers/product/product-find-by-id.controller';
import { ProductUpdateController } from '../controllers/product/product-update.controller';
import { CONTAINER_TYPE } from '../dependency-injection/container.types';

const router = Router();

const productFindAllController = container.resolve<ProductFindAllController>(
	CONTAINER_TYPE.productFindAllController
);
const productFindByIdController = container.resolve<ProductFindByIdController>(
	ProductFindByIdController
);
const productCreateController = container.resolve<ProductCreateController>(
	CONTAINER_TYPE.productCreateController
);
const productDeleteController = container.resolve<ProductDeleteController>(
	CONTAINER_TYPE.productDeleteController
);
const productUpdateController = container.resolve<ProductUpdateController>(
	CONTAINER_TYPE.productUpdateController
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
