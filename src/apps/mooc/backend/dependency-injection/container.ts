import 'reflect-metadata';
import { CategoryCreateUseCase } from '@category/application/usecase/category-create.usecase';
import { CategoryDeleteUseCase } from '@category/application/usecase/category-delete.usecase';
import { CategoryFindAllUseCase } from '@category/application/usecase/category-find-all.usecase';
import { CategoryFindByIdUseCase } from '@category/application/usecase/category-find-by-id.usecase';
import { CategoryUpdateUseCase } from '@category/application/usecase/category-update.usecase';
import { CategoryRepository } from '@category/infrastructure/repositories/category.repository';
import { ProductCreateUseCase } from '@product/application/usecases/product-create-usecase';
import { ProductDeleteUseCase } from '@product/application/usecases/product-delete.usecase';
import { ProductFindAllUseCase } from '@product/application/usecases/product-find-all.usecase';
import { ProductFindByIdUseCase } from '@product/application/usecases/product-find-by-id.usecase';
import { ProductUpdateUseCase } from '@product/application/usecases/product-update.usecase';
import { ProductRepository } from '@product/infrastructure/repositories/product.repository';
import { EventBus } from '@shared/infrastruture/event-bus/event-bus';
import { UserLoginUseCase } from '@user/application/usecase/user-login.usecase';
import { UserRegisterUseCase } from '@user/application/usecase/user-register.usecase';
import { UserLoginController } from '@apps/mooc/backend/controllers/user/user-login.controller';
import { UserRegisterController } from '@apps/mooc/backend/controllers/user/user-register.controller';
import { UserRepository } from '@user/infrastructure/repositories/user.repository';
import { container } from 'tsyringe';
import { containerTypes } from './container.types';
import { CategoryCreateController } from '../controllers/category/category-create.controller';
import { CategoryFindByIdController } from '../controllers/category/category-find-by-id-controller';
import { CategoryDeleteController } from '../controllers/category/category-delete.controller';
import { CategoryUpdateController } from '../controllers/category/category-update.controller';
import { CategoryFindAllController } from '../controllers/category/category-find-all.controller';
import { ProductCreateController } from '../controllers/product/product-create.controller';
import { ProductFindByIdController } from '../controllers/product/product-find-by-id.controller';
import { ProductDeleteController } from '../controllers/product/product-delete.controller';
import { ProductUpdateController } from '../controllers/product/product-update.controller';
import { ProductFindAllController } from '../controllers/product/product-find-all.controller';

export enum TagEventHandler {
	EventHandler = 'EventHandler',
}
container.register(
	containerTypes.userRegisterController,
	UserRegisterController
);
container.register(containerTypes.userLoginController, UserLoginController);

container.register(containerTypes.userLoginUseCase, UserLoginUseCase);

container.register(containerTypes.userRegisterUseCase, {
	useClass: UserRegisterUseCase,
});

container.register(containerTypes.userRepository, UserRepository);
container.register(
	containerTypes.categoryCreateController,
	CategoryCreateController
);
container.register(
	containerTypes.categoryFindAllController,
	CategoryFindByIdController
);

/* category controller */
container.register(
	containerTypes.categoryDeleteController,
	CategoryDeleteController
);
container.register(
	containerTypes.categoryUpdateController,
	CategoryUpdateController
);
container.register(
	containerTypes.categoryFindAllController,
	CategoryFindAllController
);
/* category usecase */
container.register(containerTypes.categoryCreateUseCase, CategoryCreateUseCase);
container.register(
	containerTypes.categoryFindByIdUseCase,
	CategoryFindByIdUseCase
);
container.register(containerTypes.categoryDeleteUseCase, CategoryDeleteUseCase);
container.register(containerTypes.categoryUpdateUseCase, CategoryUpdateUseCase);
container.register(
	containerTypes.categoryFindAllUseCase,
	CategoryFindAllUseCase
);
container.register(containerTypes.categoryRepository, CategoryRepository);

/* product */
container.register(
	containerTypes.productCreateController,
	ProductCreateController
);
container.register(
	containerTypes.productFindByIdController,
	ProductFindByIdController
);
container.register(
	containerTypes.productDeleteController,
	ProductDeleteController
);
container.register(
	containerTypes.productUpdateController,
	ProductUpdateController
);
container.register(
	containerTypes.productFindAllController,
	ProductFindAllController
);
container.register(containerTypes.productCreateUseCase, ProductCreateUseCase);
container.register(
	containerTypes.productFindByIdUseCase,
	ProductFindByIdUseCase
);
container.register(containerTypes.productDeleteUseCase, ProductDeleteUseCase);
container.register(containerTypes.productUpdateUseCase, ProductUpdateUseCase);
container.register(containerTypes.productFindAllUseCase, ProductFindAllUseCase);
container.register(containerTypes.productRepository, ProductRepository);
container.register(containerTypes.eventBus, EventBus);
/* event handler */

export { container };
