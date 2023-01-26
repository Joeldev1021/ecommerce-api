import { ProductCreateCommandHandler } from './../../../../Contexts/product/application/create/product-create-command-handler';
import { Container } from 'inversify';
import { ProductFindAllQueryHandler } from './../../../../Contexts/product/application/find-all/product-find-all-query-handler';
import { UserLoginQueryHandler } from './../../../../Contexts/user/application/login/user-login-query-handler';
import { CONTAINER_TYPES, TagHandler } from './container.types';
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
import { BrandRepository } from '../../../../Contexts/brand/infrastruture/repository/brand.repository';
const container = new Container();

/*================= Brand  ======================== */
container
	.bind<BrandCreateUseCase>(CONTAINER_TYPES.brandCreateUseCase)
	.to(BrandCreateUseCase);
container
	.bind<IBrandRepository>(CONTAINER_TYPES.brandRepository)
	.to(BrandRepository);

/*=================service ======================== */
container.bind<JwtService>(CONTAINER_TYPES.jwtService).to(JwtService);

/* ================event bus====================== */
container.bind<IEventBus>(CONTAINER_TYPES.eventBus).to(EventBus);
container
	.bind<IEventBus>(CONTAINER_TYPES.rabbitMqEventBus)
	.to(RabbitMqEventBus);

/*============== rabbit mq =====================*/
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

/* ============ CQRS ===================== */
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

export { container };
