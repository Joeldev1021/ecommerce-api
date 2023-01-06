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
	containerTypes.categoryFindByIdController,
	CategoryFindByIdController
);
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

/* product  controller*/
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
/* product usecase */

container.register(containerTypes.productCreateUseCase, ProductCreateUseCase);
container.register(
	containerTypes.productFindByIdUseCase,
	ProductFindByIdUseCase
);
container.register(containerTypes.productDeleteUseCase, ProductDeleteUseCase);
container.register(containerTypes.productUpdateUseCase, ProductUpdateUseCase);
container.register(containerTypes.productFindAllUseCase, ProductFindAllUseCase);
container.register(containerTypes.productRepository, ProductRepository);

/* event bus */
container.register(containerTypes.eventBus, EventBus);
container.register(containerTypes.rabbitMqEventBus, RabbitMqEventBus);

/* rabbit mq */
container.register(containerTypes.rabbitMQConnection, RabbitMQConnection);
container.register(
	containerTypes.rabbitMQQueueFormatter,
	RabbitMQQueueFormatter
);
container.register(containerTypes.rabbitMQConfigFactory, RabbitMQConfigFactory);
container.register(containerTypes.rabbitMQConfigurer, RabbitMqConfigurer);
container.register(
	containerTypes.domainEventFailoverPublisher,
	DomainEventFailoverPublisher
);

container.register(
	containerTypes.domainEventDeserializer,
	DomainEventDeserializer
);

/* event handler */

export { container };
