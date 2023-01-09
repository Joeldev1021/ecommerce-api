export const CONTAINER_TYPES = {
	userRegisterController: Symbol.for('userRegisterController'),
	userLoginController: Symbol.for('userLoginController'),
	userRegisterUseCase: Symbol.for('userRegisterUseCase'),
	userLoginUseCase: Symbol.for('userLoginUseCase'),
	userRepository: Symbol.for('userRepository'),
	/* ====================: Symbol.for(category =======================: Symbol.for(*/
	categoryCreateController: Symbol.for('categoryCreateController'),
	categoryFindByIdController: Symbol.for('categoryFindByIdController'),
	categoryDeleteController: Symbol.for('categoryDeleteController'),
	categoryUpdateController: Symbol.for('categoryUpdateController'),
	categoryFindAllController: Symbol.for('categoryFindAllController'),
	categoryFindCounterController: Symbol.for('categoryFindCounterController'),
	/* usecase */
	categoryCreateUseCase: Symbol.for('categoryCreateUseCase'),
	categoryFindByIdUseCase: Symbol.for('categoryFindByIdUseCase'),
	categoryDeleteUseCase: Symbol.for('categoryDeleteUseCase'),
	categoryUpdateUseCase: Symbol.for('categoryUpdateUseCase'),
	categoryFindAllUseCase: Symbol.for('categoryFindAllUseCase'),
	categoryRepository: Symbol.for('categoryRepository'),
	/* ====================: Symbol.for(category =======================: Symbol.for(*/
	productCreateController: Symbol.for('productCreateController'),
	productFindByIdController: Symbol.for('productFindByIdController'),
	productDeleteController: Symbol.for('productDeleteController'),
	productUpdateController: Symbol.for('productUpdateController'),
	productFindAllController: Symbol.for('productFindAllController'),
	/*===================: Symbol.for(Product usecase===================: Symbol.for(*/
	productCreateUseCase: Symbol.for('productCreateUseCase'),
	productFindByIdUseCase: Symbol.for('productFindByIdUseCase'),
	productDeleteUseCase: Symbol.for('productDeleteUseCase'),
	productUpdateUseCase: Symbol.for('productUpdateUseCase'),
	productFindAllUseCase: Symbol.for('productFindAllUseCase'),
	productRepository: Symbol.for('productRepository'),
	/* ====================: Symbol.for(product ========================*/
	eventBus: Symbol.for('eventBus'),
	categoryCreatedHandler: Symbol.for('categoryCreatedHandler'),
	rabbitMqEventBus: Symbol.for('rabbitMqEventBus'),
	rabbitMQConnection: Symbol.for('rabbitMQConnection'),
	rabbitMQQueueFormatter: Symbol.for('rabbitMQQueueFormatter'),
	rabbitMQConfigFactory: Symbol.for('rabbitMQConfigFactory'),
	rabbitMQConfigurer: Symbol.for('rabbitMQConfigurer'),
	domainEventFailoverPublisher: Symbol.for('domainEventFailoverPublisher'),
	domainEventDeserializer: Symbol.for('domainEventDeserializer'),
	/* ====================: Symbol.for(CQRS =========================*/
	commandHandlers: Symbol.for('commandHandlers'),
	commandBus: Symbol.for('commandBus'),
	queryHandlers: Symbol.for('queryHandlers'),
	queryBus: Symbol.for('queryBus'),
	categoryFindCounter: Symbol.for('categoryFindCounter'),
};

export enum TagHandler {
	EventHandlers = 'EventHandler',
	QueryHandlers = 'QueryHandler',
	CommandHandlers = 'CommandHandlers',
}
