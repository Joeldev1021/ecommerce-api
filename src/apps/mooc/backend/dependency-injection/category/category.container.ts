import { CategoryRepository } from './../../../../../Contexts/category/infrastructure/repositories/category.repository';
import { ICategoryRepository } from './../../../../../Contexts/category/domain/repositories/category.repository';
import { CategoryUpdateUseCase } from './../../../../../Contexts/category/application/update/category-update.usecase';
import { CategoryDeleteUseCase } from './../../../../../Contexts/category/application/delete/category-delete.usecase';
import { CategoryCreateUseCase } from './../../../../../Contexts/category/application/create/category-create.usecase';
import { CategoryFindCounterController } from './../../controllers/category/category-find-counter.controller';
import { CategoryUpdateController } from './../../controllers/category/category-update.controller';
import { CategoryDeleteController } from './../../controllers/category/category-delete.controller';
import { CategoryFindAllController } from './../../controllers/category/category-find-all.controller';
import { CategoryFindByIdController } from './../../controllers/category/category-find-by-id.controller';
import { CONTAINER_TYPES } from './../container.types';
import { CategoryCreateController } from './../../controllers/category/category-create.controller';
import { container } from '../container';

container
	.bind<CategoryCreateController>(CONTAINER_TYPES.categoryCreateController)
	.to(CategoryCreateController);

container
	.bind<CategoryFindByIdController>(CONTAINER_TYPES.categoryFindByIdController)
	.to(CategoryFindByIdController);
container
	.bind<CategoryFindAllController>(CONTAINER_TYPES.categoryFindAllController)
	.to(CategoryFindAllController);

container
	.bind<CategoryDeleteController>(CONTAINER_TYPES.categoryDeleteController)
	.to(CategoryDeleteController);

container
	.bind<CategoryUpdateController>(CONTAINER_TYPES.categoryUpdateController)
	.to(CategoryUpdateController);

container
	.bind<CategoryFindCounterController>(
		CONTAINER_TYPES.categoryFindCounterController
	)
	.to(CategoryFindCounterController);
/* category usecase */
container
	.bind<CategoryCreateUseCase>(CONTAINER_TYPES.categoryCreateUseCase)
	.to(CategoryCreateUseCase);

container
	.bind<CategoryDeleteUseCase>(CONTAINER_TYPES.categoryDeleteUseCase)
	.to(CategoryDeleteUseCase);
container
	.bind<CategoryUpdateUseCase>(CONTAINER_TYPES.categoryUpdateUseCase)
	.to(CategoryUpdateUseCase);

container
	.bind<ICategoryRepository>(CONTAINER_TYPES.categoryRepository)
	.to(CategoryRepository);
