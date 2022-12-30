import 'reflect-metadata';
import { container } from 'tsyringe';
import { CategoryCreateUseCase } from './category/application/usecase/category-create.usecase';
import { CategoryDeleteUseCase } from './category/application/usecase/category-delete.usecase';
import { CategoryFindAllUseCase } from './category/application/usecase/category-find-all.usecase';
import { CategoryFindByIdUseCase } from './category/application/usecase/category-find-by-id.usecase';
import { CategoryUpdateUseCase } from './category/application/usecase/category-update.usecase';
import { CategoryCreatedHandler } from './category/domain/events/category-created.handler';
import { CategoryCreateController } from './category/infrastructure/controllers/category-create.controller';
import { CategoryDeleteController } from './category/infrastructure/controllers/category-delete.controller';
import { CategoryFindAllController } from './category/infrastructure/controllers/category-find-all.controller';
import { CategoryFindByIdController } from './category/infrastructure/controllers/category-find-by-id-controller';
import { CategoryUpdateController } from './category/infrastructure/controllers/category-update.controller';

import { CategoryRepository } from './category/infrastructure/repositories/category.repository';
import { containerTypes } from './container.types';
import { ProductCreateUseCase } from './product/application/usecases/product-create-usecase';
import { ProductDeleteUseCase } from './product/application/usecases/product-delete.usecase';
import { ProductFindAllUseCase } from './product/application/usecases/product-find-all.usecase';
import { ProductFindByIdUseCase } from './product/application/usecases/product-find-by-id.usecase';
import { ProductUpdateUseCase } from './product/application/usecases/product-update.usecase';
import { ProductCreateController } from './product/infrastructure/controllers/product-create.controller';
import { ProductDeleteController } from './product/infrastructure/controllers/product-delete.controller';
import { ProductFindAllController } from './product/infrastructure/controllers/product-find-all.controller';
import { ProductFindByIdController } from './product/infrastructure/controllers/product-find-by-id.controller';
import { ProductUpdateController } from './product/infrastructure/controllers/product-update.controller';
import { ProductRepository } from './product/infrastructure/repositories/product.repository';
import { EventBus } from './shared/infrastruture/event-bus/event-bus';
import { UserLoginUseCase } from './user/application/usecase/user-login.usecase';
import { UserRegisterUseCase } from './user/application/usecase/user-register.usecase';
import { UserLoginController } from './user/infrastructure/controller/user-login.controller';
import { UserRegisterController } from './user/infrastructure/controller/user-register.controller';
import { AuthRequest } from './user/infrastructure/interface';
import { UserRepository } from './user/infrastructure/repositories/user.repository';

export enum handlersType {
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

container.register(
	containerTypes.categoryCreatedHandler,
	CategoryCreatedHandler
);

export { container };
