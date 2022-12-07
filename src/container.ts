import * as awilix from "awilix";
import { CategoryCreateUseCase } from "./category/application/usecase/category-create.usecase";
import { CategoryDeleteUseCase } from "./category/application/usecase/category-delete.usecase";
import { CategoryFindAllUseCase } from "./category/application/usecase/category-find-all.usecase";
import { CategoryFindByIdUseCase } from "./category/application/usecase/category-find-by-id.usecase";
import { CategoryUpdateUseCase } from "./category/application/usecase/category-update.usecase";
import { CategoryCreateController } from "./category/infrastructure/controllers/category-create.controller";
import { CategoryDeleteController } from "./category/infrastructure/controllers/category-delete.controller";
import { CategoryFindAllController } from "./category/infrastructure/controllers/category-find-all.controller";
import { CategoryFindByIdController } from "./category/infrastructure/controllers/category-find-by-id-controller";
import { CategoryUpdateController } from "./category/infrastructure/controllers/category-update.controller";

import { CategoryRepository } from "./category/infrastructure/repositories/category.repository";
import { ProductCreateUseCase } from "./product/application/usecases/product-create-usecase";
import { ProductDeleteUseCase } from "./product/application/usecases/product-delete.usecase";
import { ProductFindAllUseCase } from "./product/application/usecases/product-find-all.usecase";
import { ProductFindByIdUseCase } from "./product/application/usecases/product-find-by-id.usecase";
import { ProductUpdateUseCase } from "./product/application/usecases/product-update.usecase";
import { ProductCreateController } from "./product/infrastructure/controllers/product-create.controller";
import { ProductDeleteController } from "./product/infrastructure/controllers/product-delete.controller";
import { ProductFindAllController } from "./product/infrastructure/controllers/product-find-all.controller";
import { ProductFindByIdController } from "./product/infrastructure/controllers/product-find-by-id.controller";
import { ProductUpdateController } from "./product/infrastructure/controllers/product-update.controller";
import { ProductRepository } from "./product/infrastructure/repositories/product.repository";
import { UserLoginUseCase } from "./user/application/usecase/user-login.usecase";
import { UserRegisterUseCase } from "./user/application/usecase/user-register.usecase";
import { UserLoginController } from "./user/infrastructure/controller/user-login.controller";
import { UserRegisterController } from "./user/infrastructure/controller/user-register.controller";
import { UserRepository } from "./user/infrastructure/repositories/user.repository";

const container = awilix.createContainer();

container.register({
  userLoginController: awilix.asClass(UserLoginController),
  userLoginUseCase: awilix.asClass(UserLoginUseCase),
  userRegisterController: awilix.asClass(UserRegisterController),
  userRegisterUseCase: awilix.asClass(UserRegisterUseCase),
  userRepository: awilix.asClass(UserRepository).singleton(),
});

container.register({
  /* category controller */
  categoryCreateController: awilix.asClass(CategoryCreateController),
  categoryFindByIdController: awilix.asClass(CategoryFindByIdController),
  categoryDeleteController: awilix.asClass(CategoryDeleteController),
  categoryUpdateController: awilix.asClass(CategoryUpdateController),
  categoryFindAllController: awilix.asClass(CategoryFindAllController),
  /* category usecase */
  categoryCreateUseCase: awilix.asClass(CategoryCreateUseCase),
  categoryFindByIdUseCase: awilix.asClass(CategoryFindByIdUseCase),
  categoryDeleteUseCase: awilix.asClass(CategoryDeleteUseCase),
  categoryUpdateUseCase: awilix.asClass(CategoryUpdateUseCase),
  categoryFindAllUseCase: awilix.asClass(CategoryFindAllUseCase),
  /* category repository  */
  categoryRepository: awilix.asClass(CategoryRepository).singleton(),
});

container.register({
  /* product */
  productCreateController: awilix.asClass(ProductCreateController),
  productFindByIdController: awilix.asClass(ProductFindByIdController),
  productDeleteController: awilix.asClass(ProductDeleteController),
  productUpdateController: awilix.asClass(ProductUpdateController),
  productFindAllController: awilix.asClass(ProductFindAllController),
  /* Product usecase */
  productCreateUseCase: awilix.asClass(ProductCreateUseCase),
  productFindByIdUseCase: awilix.asClass(ProductFindByIdUseCase),
  productDeleteUseCase: awilix.asClass(ProductDeleteUseCase),
  productUpdateUseCase: awilix.asClass(ProductUpdateUseCase),
  productFindAllUseCase: awilix.asClass(ProductFindAllUseCase),
  /* Product repository  */
  productRepository: awilix.asClass(ProductRepository).singleton(),
});

export { container };
