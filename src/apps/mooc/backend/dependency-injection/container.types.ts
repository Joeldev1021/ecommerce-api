export const CONTAINER_TYPES = {
	userRegisterController: Symbol.for('userRegisterController'),
	userLoginController: Symbol.for('userLoginController'),
	userRegisterUseCase: Symbol.for('userRegisterUseCase'),
	userRepository: Symbol.for('userRepository'),
	/* ==================== Symbol category =======================*/
	categoryCreateController: Symbol.for('categoryCreateController'),
	categoryFindByIdController: Symbol.for('categoryFindByIdController'),
	categoryDeleteController: Symbol.for('categoryDeleteController'),
	categoryUpdateController: Symbol.for('categoryUpdateController'),
	categoryFindAllController: Symbol.for('categoryFindAllController'),
	categoryFindCounterController: Symbol.for('categoryFindCounterController'),
	/* ================usecase================== */
	categoryCreateUseCase: Symbol.for('categoryCreateUseCase'),
	categoryDeleteUseCase: Symbol.for('categoryDeleteUseCase'),
	categoryUpdateUseCase: Symbol.for('categoryUpdateUseCase'),
	categoryRepository: Symbol.for('categoryRepository'),
	/* ==================== Symbol category ======================= */
	productCreateController: Symbol.for('productCreateController'),
	productFindByIdController: Symbol.for('productFindByIdController'),
	productDeleteController: Symbol.for('productDeleteController'),
	productUpdateController: Symbol.for('productUpdateController'),
	productFindAllController: Symbol.for('productFindAllController'),
	/*=================== Product ===================*/
	productCreateUseCase: Symbol.for('productCreateUseCase'),
	productDeleteUseCase: Symbol.for('productDeleteUseCase'),
	productUpdateUseCase: Symbol.for('productUpdateUseCase'),
	productRepository: Symbol.for('productRepository'),
	/*=================== Brand ===================*/

	brandCreateController: Symbol.for('brandCreateController'),
	brandCreateUseCase: Symbol.for('brandCreateUseCase'),
	brandRepository: Symbol.for('brandRepository'),

	/* ====================: Services =========================*/
	jwtService: Symbol.for('jwtService'),

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
	commandBus: Symbol.for('commandBus'),
	queryBus: Symbol.for('queryBus'),
	categoryFindCounterUseCase: Symbol.for('categoryFindCounterUseCase'),

	/*==================== test ================================*/
	envArranger: Symbol.for('EnvArranger'),
};

export enum TagHandler {
	EventHandlers = 'EventHandler',
	QueryHandlers = 'QueryHandler',
	CommandHandlers = 'CommandHandlers',
}
