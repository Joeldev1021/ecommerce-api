import { Container } from 'inversify';
import { CONTAINER_TYPES, TagHandler } from './container.types';
import { CategoryCreateController } from '../controllers/category/category-create.controller';
import { CategoryFindByIdController } from '../controllers/category/category-find-by-id.controller';
import { CategoryDeleteController } from '../controllers/category/category-delete.controller';
import { CategoryUpdateController } from '../controllers/category/category-update.controller';
import { CategoryFindAllController } from '../controllers/category/category-find-all.controller';
import { ProductCreateController } from '../controllers/product/product-create.controller';
import { ProductFindByIdController } from '../controllers/product/product-find-by-id.controller';
import { ProductDeleteController } from '../controllers/product/product-delete.controller';
import { ProductUpdateController } from '../controllers/product/product-update.controller';
import { ProductFindAllController } from '../controllers/product/product-find-all.controller';
import { UserRegisterController } from '../controllers/user/user-register.controller';
import { UserLoginController } from '../controllers/user/user-login.controller';
import { UserLoginUseCase } from '../../../../Contexts/user/application/usecase/user-login.usecase';
import { UserRegisterUseCase } from '../../../../Contexts/user/application/usecase/user-register.usecase';
import { UserRepository } from '../../../../Contexts/user/infrastructure/repositories/user.repository';
import { CategoryCreateUseCase } from '../../../../Contexts/category/application/usecase/category-create.usecase';
import { CategoryFindByIdUseCase } from '../../../../Contexts/category/application/usecase/category-find-by-id.usecase';
import { CategoryDeleteUseCase } from '../../../../Contexts/category/application/usecase/category-delete.usecase';
import { CategoryUpdateUseCase } from '../../../../Contexts/category/application/usecase/category-update.usecase';
import { CategoryFindAllUseCase } from '../../../../Contexts/category/application/usecase/category-find-all.usecase';
import { CategoryRepository } from '../../../../Contexts/category/infrastructure/repositories/category.repository';
import { ProductCreateUseCase } from '../../../../Contexts/product/application/usecases/product-create-usecase';
import { ProductFindAllUseCase } from '../../../../Contexts/product/application/usecases/product-find-all.usecase';
import { ProductFindByIdUseCase } from '../../../../Contexts/product/application/usecases/product-find-by-id.usecase';
import { ProductDeleteUseCase } from '../../../../Contexts/product/application/usecases/product-delete.usecase';
import { ProductUpdateUseCase } from '../../../../Contexts/product/application/usecases/product-update.usecase';
import { ProductRepository } from '../../../../Contexts/product/infrastructure/repositories/product.repository';
import { EventBus } from '../../../../Contexts/shared/infrastruture/event-bus/event-bus';
import { RabbitMqEventBus } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-eventbus';
import { RabbitMQConnection } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { RabbitMQQueueFormatter } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/file-ex/rabbit-mq-queue-formatter';
import { DomainEventFailoverPublisher } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-failover-publisher';
import { DomainEventDeserializer } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-deserializer';
import { CommandHandlers } from '../../../../Contexts/shared/infrastruture/command-bus/command-handlers';
import { InMemoryCommandBus } from '../../../../Contexts/shared/infrastruture/command-bus/in-memory-command-bus';
import { InMemoryQueryBus } from '../../../../Contexts/shared/infrastruture/query-bus/in-memory-query-bus';
import { CategoryFindCounterController } from '../controllers/category/category-find-counter.controller';
import { CategoryFindCounter } from '../../../../Contexts/category/application/usecase/find/category-find-counter';
import { CategoryFindCounterQueryHandler } from '../../../../Contexts/category/application/usecase/find/category-find-counter.queryHandler';
import { IEventBus } from '../../../../Contexts/shared/domain/interface/event-bus';
import { CategoryCreatedHandler } from '../../../../Contexts/category/domain/events/category-created.handler';
import { IQueryBus } from '../../../../Contexts/shared/domain/interface/query-bus';
import { ICommandBus } from '../../../../Contexts/shared/domain/interface/command-bust';
import { CategoryCreateCommandHandler } from '../../../../Contexts/category/application/command/category-create-command.handler';
import { IEnvironmentArranger } from '../../../../../tests/Contexts/shared/infrastructure/arrarger/enviroment-arranger';
import { TypeOrmIEnvironmentArranger } from '../../../../../tests/Contexts/shared/infrastructure/persistance/typeorm-environment-arranger';
const container = new Container();

container
	.bind<UserRegisterController>(CONTAINER_TYPES.userRegisterController)
	.to(UserRegisterController);

container
	.bind<UserLoginController>(CONTAINER_TYPES.userLoginController)
	.to(UserLoginController);

container
	.bind<UserLoginUseCase>(CONTAINER_TYPES.userLoginUseCase)
	.to(UserLoginUseCase);

container
	.bind<UserRegisterUseCase>(CONTAINER_TYPES.userRegisterUseCase)
	.to(UserRegisterUseCase);

container
	.bind<UserRepository>(CONTAINER_TYPES.userRepository)
	.to(UserRepository);
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
	.bind<CategoryFindByIdUseCase>(CONTAINER_TYPES.categoryFindByIdUseCase)
	.to(CategoryFindByIdUseCase);
container
	.bind<CategoryDeleteUseCase>(CONTAINER_TYPES.categoryDeleteUseCase)
	.to(CategoryDeleteUseCase);
container
	.bind<CategoryUpdateUseCase>(CONTAINER_TYPES.categoryUpdateUseCase)
	.to(CategoryUpdateUseCase);

container
	.bind<CategoryFindAllUseCase>(CONTAINER_TYPES.categoryFindAllUseCase)
	.to(CategoryFindAllUseCase);
container
	.bind<CategoryRepository>(CONTAINER_TYPES.categoryRepository)
	.to(CategoryRepository);

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
	.bind<ProductFindByIdUseCase>(CONTAINER_TYPES.productFindByIdUseCase)
	.to(ProductFindByIdUseCase);
container
	.bind<ProductDeleteUseCase>(CONTAINER_TYPES.productDeleteUseCase)
	.to(ProductDeleteUseCase);
container
	.bind<ProductUpdateUseCase>(CONTAINER_TYPES.productUpdateUseCase)
	.to(ProductUpdateUseCase);
container
	.bind<ProductFindAllUseCase>(CONTAINER_TYPES.productFindAllUseCase)
	.to(ProductFindAllUseCase);
container
	.bind<ProductRepository>(CONTAINER_TYPES.productRepository)
	.to(ProductRepository);
/* event bus */

container.bind<IEventBus>(CONTAINER_TYPES.eventBus).to(EventBus);
container
	.bind<IEventBus>(CONTAINER_TYPES.rabbitMqEventBus)
	.to(RabbitMqEventBus);

/* rabbit mq */
container
	.bind<RabbitMQConnection>(CONTAINER_TYPES.rabbitMQConnection)
	.to(RabbitMQConnection);
container
	.bind<RabbitMQQueueFormatter>(CONTAINER_TYPES.rabbitMQQueueFormatter)
	.to(RabbitMQQueueFormatter);
/* container
	.bind<RabbitMQConfigFactory>(CONTAINER_TYPES.rabbitMQConfigFactory)
	.to(RabbitMQConfigFactory); */
/* container
	.bind<RabbitMqConfigurer>(CONTAINER_TYPES.rabbitMQConfigurer)
	.to(RabbitMqConfigurer); */
container
	.bind<DomainEventFailoverPublisher>(
		CONTAINER_TYPES.domainEventFailoverPublisher
	)
	.to(DomainEventFailoverPublisher);

container
	.bind<DomainEventDeserializer>(CONTAINER_TYPES.domainEventDeserializer)
	.to(DomainEventDeserializer);
/* ============ CQRS ===================== */
/* command */
container
	.bind<CommandHandlers>(CONTAINER_TYPES.commandHandlers)
	.to(CommandHandlers);

container.bind<ICommandBus>(CONTAINER_TYPES.commandBus).to(InMemoryCommandBus);
/* query  */
container.bind<IQueryBus>(CONTAINER_TYPES.queryBus).to(InMemoryQueryBus);
container
	.bind<CategoryFindCounter>(CONTAINER_TYPES.categoryFindCounter)
	.to(CategoryFindCounter);

/* tag */
container.bind(TagHandler.QueryHandlers).to(CategoryFindCounterQueryHandler);

container.bind(TagHandler.EventHandlers).to(CategoryCreatedHandler);

container.bind(TagHandler.CommandHandlers).to(CategoryCreateCommandHandler);

/* ==================== test ========================= */
container
	.bind<IEnvironmentArranger>(CONTAINER_TYPES.envArranger)
	.to(TypeOrmIEnvironmentArranger);

export { container };
