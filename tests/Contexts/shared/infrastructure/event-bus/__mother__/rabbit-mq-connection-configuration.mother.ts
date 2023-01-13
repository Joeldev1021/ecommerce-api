export class RabbitMQConnectionConfigurationMother {
	static create(): any {
		return {
			connectionSettings: {
				username: 'guest',
				password: 'guest',
				vhost: '/',
				connection: {
					secure: false,
					hostname: 'localhost',
					port: 5672,
				},
			},
			exchangeSettings: { name: '' },
		};
	}
}
