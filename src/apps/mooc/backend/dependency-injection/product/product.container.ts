import { ProductFindAllController } from './../../controllers/product/product-find-all.controller';
import { ProductCreateUseCase } from './../../../../../Contexts/product/application/create/product-create-usecase';
import { ProductDeleteUseCase } from './../../../../../Contexts/product/application/delete/product-delete.usecase';
import { ProductUpdateUseCase } from './../../../../../Contexts/product/application/update/product-update.usecase';
import { ProductRepository } from './../../../../../Contexts/product/infrastructure/repositories/product.repository';
import { IProductRepository } from './../../../../../Contexts/product/domain/repositories/product.repository';
import { ProductUpdateController } from './../../controllers/product/product-update.controller';
import { ProductDeleteController } from './../../controllers/product/product-delete.controller';
import { ProductFindByIdController } from './../../controllers/product/product-find-by-id.controller';
import { CONTAINER_TYPES } from './../container.types';
import { ProductCreateController } from './../../controllers/product/product-create.controller';
import { container } from '../container';

/* product  controller*/
container
	.bind<ProductCreateController>(CONTAINER_TYPES.productCreateController)
	.to(ProductCreateController);

container
	.bind<ProductFindByIdController>(CONTAINER_TYPES.productFindByIdController)
	.to(ProductFindByIdController);
container
	.bind<ProductDeleteController>(CONTAINER_TYPES.productDeleteController)
	.to(ProductDeleteController);
container
	.bind<ProductUpdateController>(CONTAINER_TYPES.productUpdateController)
	.to(ProductUpdateController);

container
	.bind<ProductFindAllController>(CONTAINER_TYPES.productFindAllController)
	.to(ProductFindAllController);
/* product usecase */

container
	.bind<ProductCreateUseCase>(CONTAINER_TYPES.productCreateUseCase)
	.to(ProductCreateUseCase);
container
	.bind<ProductDeleteUseCase>(CONTAINER_TYPES.productDeleteUseCase)
	.to(ProductDeleteUseCase);
container
	.bind<ProductUpdateUseCase>(CONTAINER_TYPES.productUpdateUseCase)
	.to(ProductUpdateUseCase);
container
	.bind<IProductRepository>(CONTAINER_TYPES.productRepository)
	.to(ProductRepository);
