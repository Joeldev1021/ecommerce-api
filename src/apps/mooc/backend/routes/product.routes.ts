import { Router } from 'express';
import { container } from 'tsyringe';
import { ProductCreateController } from '../controllers/product/product-create.controller';
import { ProductDeleteController } from '../controllers/product/product-delete.controller';
import { ProductFindAllController } from '../controllers/product/product-find-all.controller';
import { ProductFindByIdController } from '../controllers/product/product-find-by-id.controller';
import { ProductUpdateController } from '../controllers/product/product-update.controller';
import { containerTypes } from '../dependency-injection/container.types';

const router = Router();

const productFindAllController = container.resolve<ProductFindAllController>(
	containerTypes.productFindAllController
);
const productFindByIdController = container.resolve(ProductFindByIdController);
const productCreateController = container.resolve<ProductCreateController>(
	containerTypes.productCreateController
);
const productDeleteController = container.resolve<ProductDeleteController>(
	containerTypes.productDeleteController
);
const productUpdateController = container.resolve<ProductUpdateController>(
	containerTypes.productUpdateController
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
