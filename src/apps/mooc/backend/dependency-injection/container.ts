import { container } from 'tsyringe';
import { CONTAINER_TYPE } from './container.types';
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
import { RabbitMQConfigFactory } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-confg-factory';
import { RabbitMqConfigurer } from '../../../../Contexts/shared/infrastruture/event-bus/rabbitmq/rabbitmq-configurer';
import { DomainEventFailoverPublisher } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-failover-publisher';
import { DomainEventDeserializer } from '../../../../Contexts/shared/infrastruture/event-bus/domain-event-deserializer';
import { CommandHandlers } from '../../../../Contexts/shared/infrastruture/command-bus/command-handlers';
import { QueryHandlers } from '../../../../Contexts/shared/infrastruture/query-bus/query-handlers';
import { InMemoryCommandBus } from '../../../../Contexts/shared/infrastruture/command-bus/in-memory-command-bus';
import { InMemoryQueryBus } from '../../../../Contexts/shared/infrastruture/query-bus/in-memory-query-bus';
import { CategoryFindCounterController } from '../controllers/category/category-find-counter.controller';
import { CategoryFindCounter } from '../../../../Contexts/category/application/usecase/find/category-find-counter';

export enum TagEventHandler {
	EventHandler = 'EventHandler',
}
container.register(
	CONTAINER_TYPE.userRegisterController,
	UserRegisterController
);
container.register(CONTAINER_TYPE.userLoginController, UserLoginController);

container.register(CONTAINER_TYPE.userLoginUseCase, UserLoginUseCase);

container.register(CONTAINER_TYPE.userRegisterUseCase, {
	useClass: UserRegisterUseCase,
});

container.register(CONTAINER_TYPE.userRepository, UserRepository);
container.register(
	CONTAINER_TYPE.categoryCreateController,
	CategoryCreateController
);
container.register(
	CONTAINER_TYPE.categoryFindAllController,
	CategoryFindByIdController
);

/* category controller */
container.register(
	CONTAINER_TYPE.categoryFindByIdController,
	CategoryFindByIdController
);
container.register(
	CONTAINER_TYPE.categoryDeleteController,
	CategoryDeleteController
);
container.register(
	CONTAINER_TYPE.categoryUpdateController,
	CategoryUpdateController
);
container.register(
	CONTAINER_TYPE.categoryFindAllController,
	CategoryFindAllController
);
container.register(
	CONTAINER_TYPE.categoryFindCounterController,
	CategoryFindCounterController
);
/* category usecase */
container.register(CONTAINER_TYPE.categoryCreateUseCase, CategoryCreateUseCase);
container.register(
	CONTAINER_TYPE.categoryFindByIdUseCase,
	CategoryFindByIdUseCase
);
container.register(CONTAINER_TYPE.categoryDeleteUseCase, CategoryDeleteUseCase);
container.register(CONTAINER_TYPE.categoryUpdateUseCase, CategoryUpdateUseCase);
container.register(
	CONTAINER_TYPE.categoryFindAllUseCase,
	CategoryFindAllUseCase
);
container.register(CONTAINER_TYPE.categoryRepository, CategoryRepository);

/* product  controller*/
container.register(
	CONTAINER_TYPE.productCreateController,
	ProductCreateController
);
container.register(
	CONTAINER_TYPE.productFindByIdController,
	ProductFindByIdController
);
container.register(
	CONTAINER_TYPE.productDeleteController,
	ProductDeleteController
);
container.register(
	CONTAINER_TYPE.productUpdateController,
	ProductUpdateController
);

container.register(
	CONTAINER_TYPE.productFindAllController,
	ProductFindAllController
);
/* product usecase */

container.register(CONTAINER_TYPE.productCreateUseCase, ProductCreateUseCase);
container.register(
	CONTAINER_TYPE.productFindByIdUseCase,
	ProductFindByIdUseCase
);
container.register(CONTAINER_TYPE.productDeleteUseCase, ProductDeleteUseCase);
container.register(CONTAINER_TYPE.productUpdateUseCase, ProductUpdateUseCase);
container.register(CONTAINER_TYPE.productFindAllUseCase, ProductFindAllUseCase);
container.register(CONTAINER_TYPE.productRepository, ProductRepository);

/* event bus */
container.register(CONTAINER_TYPE.eventBus, EventBus);
container.register(CONTAINER_TYPE.rabbitMqEventBus, RabbitMqEventBus);

/* rabbit mq */
container.register(CONTAINER_TYPE.rabbitMQConnection, RabbitMQConnection);
container.register(
	CONTAINER_TYPE.rabbitMQQueueFormatter,
	RabbitMQQueueFormatter
);
container.register(CONTAINER_TYPE.rabbitMQConfigFactory, RabbitMQConfigFactory);
container.register(CONTAINER_TYPE.rabbitMQConfigurer, RabbitMqConfigurer);
container.register(
	CONTAINER_TYPE.domainEventFailoverPublisher,
	DomainEventFailoverPublisher
);

container.register(
	CONTAINER_TYPE.domainEventDeserializer,
	DomainEventDeserializer
);
/* ============ CQRS ===================== */
/* command */
container.register(CONTAINER_TYPE.commandHandlers, CommandHandlers);
container.register(CONTAINER_TYPE.commandBus, InMemoryCommandBus);
/* query  */
//container.register(CONTAINER_TYPE.queryHandlers, QueryHandlers);
container.register(CONTAINER_TYPE.queryBus, InMemoryQueryBus);
container.register(CONTAINER_TYPE.categoryFindCounter, CategoryFindCounter);

export { container };
