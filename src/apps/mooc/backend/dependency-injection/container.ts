import { CartAddItemUseCase } from './../../../../Contexts/cart/application/cart-add-item/cart-add-item.usecase';
import { CartAddItemController } from './../controllers/cart/cart-add-item.controller';
import { ProductUpdateUseCase } from './../../../../Contexts/product/application/update/product-update.usecase';
import { ProductDeleteUseCase } from './../../../../Contexts/product/application/delete/product-delete.usecase';
import { ProductCreateUseCase } from './../../../../Contexts/product/application/create/product-create-usecase';
import { ProductFindAllController } from './../controllers/product/product-find-all.controller';
import { ProductUpdateController } from './../controllers/product/product-update.controller';
import { ProductDeleteController } from './../controllers/product/product-delete.controller';
import { ProductFindByIdController } from './../controllers/product/product-find-by-id.controller';
import { ProductCreateController } from './../controllers/product/product-create.controller';
import { CategoryRepository } from './../../../../Contexts/category/infrastructure/repositories/category.repository';
import { ICategoryRepository } from './../../../../Contexts/category/domain/repositories/category.repository';
import { CategoryUpdateUseCase } from './../../../../Contexts/category/application/update/category-update.usecase';
import { CategoryDeleteUseCase } from './../../../../Contexts/category/application/delete/category-delete.usecase';
import { CategoryCreateUseCase } from './../../../../Contexts/category/application/create/category-create.usecase';
import { CategoryFindCounterController } from './../controllers/category/category-find-counter.controller';
import { CategoryUpdateController } from './../controllers/category/category-update.controller';
import { CategoryDeleteController } from './../controllers/category/category-delete.controller';
import { CategoryFindAllController } from './../controllers/category/category-find-all.controller';
import { CategoryFindByIdController } from './../controllers/category/category-find-by-id.controller';
import { CategoryCreateController } from './../controllers/category/category-create.controller';
import { UserRepository } from './../../../../Contexts/user/infrastructure/repositories/user.repository';
import { IUserRepository } from './../../../../Contexts/user/domain/repositories/user.repository';
import { UserRegisterUseCase } from './../../../../Contexts/user/application/register/user-register.usecase';
import { UserLoginController } from './../controllers/user/user-login.controller';
import { UserRegisterController } from './../controllers/user/user-register.controller';
import { ProductRepository } from './../../../../Contexts/product/infrastructure/repositories/product.repository';
import { IProductRepository } from './../../../../Contexts/product/domain/repositories/product.repository';
import { BrandRepository } from './../../../../Contexts/brand/infrastruture/repository/brand.repository';
import { BrandCreateController } from './../controllers/brand/brand-create.controller';
import { ProductCreateCommandHandler } from './../../../../Contexts/product/application/create/product-create-command-handler';
import { ProductFindAllQueryHandler } from './../../../../Contexts/product/application/find-all/product-find-all-query-handler';
import { UserLoginQueryHandler } from './../../../../Contexts/user/application/login/user-login-query-handler';
import { EventBus } from '../../../../Contexts/shared/infrastruture/event-bus/event-bus';
import { RabbitMqEventBus } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-eventbus';
import { RabbitMQConnection } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { RabbitMQQueueFormatter } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/file-ex/rabbit-mq-queue-formatter';
import { DomainEventFailoverPublisher } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-failover-publisher';
import { DomainEventDeserializer } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-deserializer';
import { InMemoryCommandBus } from '../../../../Contexts/shared/infrastruture/command-bus/in-memory-command-bus';
import { InMemoryQueryBus } from '../../../../Contexts/shared/infrastruture/query-bus/in-memory-query-bus';
import { CategoryFindCounterQueryHandler } from '../../../../Contexts/category/application/find-counter/category-find-counter.query-handler';
import { IEventBus } from '../../../../Contexts/shared/domain/interface/event-bus';
import { CategoryCreatedHandler } from '../../../../Contexts/category/domain/events/category-created.handler';
import { IQueryBus } from '../../../../Contexts/shared/domain/interface/query-bus';
import { ICommandBus } from '../../../../Contexts/shared/domain/interface/command-bust';
import { CategoryCreateCommandHandler } from '../../../../Contexts/category/application/create/category-create-command-handler';
import { IEnvironmentArranger } from '../../../../../tests/Contexts/shared/infrastructure/arrarger/enviroment-arranger';
import { TypeOrmEnvironmentArranger } from '../../../../../tests/Contexts/shared/infrastructure/persistance/typeorm-environment-arranger';
import { CategoryDeleteCommandHandler } from '../../../../Contexts/category/application/delete/category-delete-command-handler';
import { CategoryFindAllQueryHandler } from '../../../../Contexts/category/application/find-all/category-find-all.query-handler';
import { JwtService } from '../../../../Contexts/shared/infrastruture/services/jwt.service';
import { ProductFindByIdQueryHandler } from '../../../../Contexts/product/application/find-by-id/product-find-by-id-query-handler';
import { ProductDeleteCommandHandler } from '../../../../Contexts/product/application/delete/product-delete-command-handler';
import { ProductUpdateCommandHandler } from '../../../../Contexts/product/application/update/product-update-command-handler';
import { BrandCreateUseCase } from '../../../../Contexts/brand/application/create/brand-create.usecase';
import { BrandCreateCommandHandler } from '../../../../Contexts/brand/application/create/brand-create-command-handler';
import { IBrandRepository } from '../../../../Contexts/brand/domain/repository/brand.repository';
import { Container } from 'inversify';
import { CONTAINER_TYPES, TagHandler } from './container.types';

export const container = new Container();

/* ====================== user ========================*/
container
	.bind<UserRegisterController>(CONTAINER_TYPES.userRegisterController)
	.to(UserRegisterController);

container
	.bind<UserLoginController>(CONTAINER_TYPES.userLoginController)
	.to(UserLoginController);

container
	.bind<UserRegisterUseCase>(CONTAINER_TYPES.userRegisterUseCase)
	.to(UserRegisterUseCase);

container
	.bind<IUserRepository>(CONTAINER_TYPES.userRepository)
	.to(UserRepository);

/* ================== category ========================== */
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

/* ============================= Product =============================== */
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
/* ==================== product usecase ====================*/

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

/*================================ Brand ================================= */
container
	.bind<BrandCreateController>(CONTAINER_TYPES.brandCreateController)
	.to(BrandCreateController);
container
	.bind<BrandCreateUseCase>(CONTAINER_TYPES.brandCreateUseCase)
	.to(BrandCreateUseCase);
container
	.bind<IBrandRepository>(CONTAINER_TYPES.brandRepository)
	.to(BrandRepository);

/* ========================= cart =================================== */

container
	.bind<CartAddItemController>(CONTAINER_TYPES.cartAddItemController)
	.to(CartAddItemController);
container
	.bind<CartAddItemUseCase>(CONTAINER_TYPES.cartAddItemUseCase)
	.to(CartAddItemUseCase);

/*================================ service ==========c======================== */
container.bind<JwtService>(CONTAINER_TYPES.jwtService).to(JwtService);

/* ================event bus====================== */
container.bind<IEventBus>(CONTAINER_TYPES.eventBus).to(EventBus);
container
	.bind<IEventBus>(CONTAINER_TYPES.rabbitMqEventBus)
	.to(RabbitMqEventBus);

/*====================== rabbit mq ==============================*/
container
	.bind<RabbitMQConnection>(CONTAINER_TYPES.rabbitMQConnection)
	.to(RabbitMQConnection);
container
	.bind<RabbitMQQueueFormatter>(CONTAINER_TYPES.rabbitMQQueueFormatter)
	.to(RabbitMQQueueFormatter);

container
	.bind<DomainEventFailoverPublisher>(
		CONTAINER_TYPES.domainEventFailoverPublisher
	)
	.to(DomainEventFailoverPublisher);

container
	.bind<DomainEventDeserializer>(CONTAINER_TYPES.domainEventDeserializer)
	.to(DomainEventDeserializer);

/* ===================== CQRS ===================== */
/* ======================query ================================== */
container.bind<IQueryBus>(CONTAINER_TYPES.queryBus).to(InMemoryQueryBus);
container.bind(TagHandler.QueryHandlers).to(UserLoginQueryHandler);
container.bind(TagHandler.QueryHandlers).to(CategoryFindCounterQueryHandler);
container.bind(TagHandler.QueryHandlers).to(CategoryFindAllQueryHandler);
container.bind(TagHandler.QueryHandlers).to(ProductFindAllQueryHandler);
container.bind(TagHandler.QueryHandlers).to(ProductFindByIdQueryHandler);
/* ====================== command ===================================== */
container.bind<ICommandBus>(CONTAINER_TYPES.commandBus).to(InMemoryCommandBus);
container.bind(TagHandler.CommandHandlers).to(CategoryCreateCommandHandler);
container.bind(TagHandler.CommandHandlers).to(CategoryDeleteCommandHandler);
container.bind(TagHandler.CommandHandlers).to(ProductCreateCommandHandler);
container.bind(TagHandler.CommandHandlers).to(ProductDeleteCommandHandler);
container.bind(TagHandler.CommandHandlers).to(ProductUpdateCommandHandler);
container.bind(TagHandler.CommandHandlers).to(BrandCreateCommandHandler);

/*====================== event domain ===============================*/
container.bind(TagHandler.EventHandlers).to(CategoryCreatedHandler);

/* ==================== test ========================= */
container
	.bind<IEnvironmentArranger>(CONTAINER_TYPES.envArranger)
	.to(TypeOrmEnvironmentArranger);
