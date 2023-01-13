/* import { TypeOrmEnvironmentArranger } from '../persistance/typeorm-environment-arranger';
import { RabbitMqEventBus } from '../../../../../src/Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-eventbus';
import { RabbitMQConnection } from '../../../../../src/Contexts/shared/infrastruture/event-bus/rabbitmq/rabbit-mq-connection';
import { DomainEventSubscribers } from '../../../../../src/Contexts/shared/infrastruture/event-bus/domain-event-subscribers';
import { DomainEventFailoverPublisher } from '../../../../../src/Contexts/shared/infrastruture/event-bus/domain-event-failover-publisher';
import { container } from '../../../../../src/apps/mooc/backend/dependency-injection/container';
import { CONTAINER_TYPES } from '../../../../../src/apps/mooc/backend/dependency-injection/container.types';
import { IEnvironmentArranger } from '../arrarger/enviroment-arranger';
import { DomainEventSubscriberDummy } from './__mocks__/domain-event-subscriber-dummy';
import { RabbitMqConfigurer } from '../../../../../src/Contexts/shared/infrastruture/event-bus/rabbitmq/rabbitmq-configurer';
import { RabbitMQConnectionMother } from './__mother__/rabbit-mq-connection.mother';

const environmentArranger = container.get<IEnvironmentArranger>(
	CONTAINER_TYPES.envArranger
);
const rabbitMQConnection = container.get<RabbitMQConnection>(
	CONTAINER_TYPES.rabbitMQConnection
);

/* const repository = container.get<UserRepository>(
	CONTAINER_TYPES.userRepository
);
describe('RabbitMQEventBus test', () => {
	const exchange = 'test_domain_events';

	beforeAll(async () => {
		await environmentArranger.arrange();
	});

	beforeEach(async () => {
		await environmentArranger.arrange();
	});

	afterAll(async () => {
		await environmentArranger.close();
	});

	 	describe('unit', () => {
		it('should use the failover publisher if publish to RabbitMQ fails', async () => {
			//const connection = RabbitMQConnectionMother.failOnPublish();
			//const failoverPublisher =
			//DomainEventFailoverPublisherMother.failOverDouble();
			const eventBus = new RabbitMqEventBus(rabbitMQConnection);
			const event = CoursesCounterIncrementedDomainEventMother.create();

			await eventBus.publish([event]);

			failoverPublisher.assertEventHasBeenPublished(event);
		});
	});

	describe('integration', () => {
		let connection: RabbitMQConnection;
		let dummySubscriber: DomainEventSubscriberDummy;
		let configurer: RabbitMqConfigurer;
		let failoverPublisher: DomainEventFailoverPublisher;
		let subscribers: DomainEventSubscribers;

		beforeEach(async () => {
			connection = await RabbitMQConnectionMother.create();
			failoverPublisher = DomainEventFailoverPublisherMother.create();
			configurer = new RabbitMQConfigurer(connection, queueNameFormatter, 50);
			await arranger.arrange();
			dummySubscriber = new DomainEventSubscriberDummy();
			subscribers = new DomainEventSubscribers([dummySubscriber]);
		});

		afterEach(async () => {
			await cleanEnvironment();
			await connection.close();
		});

		it('should consume the events published to RabbitMQ', async () => {
			await configurer.configure({ exchange, subscribers: [dummySubscriber] });
			const eventBus = new RabbitMQEventBus({
				failoverPublisher,
				connection,
				exchange,
				queueNameFormatter,
				maxRetries: 3,
			});
			await eventBus.addSubscribers(subscribers);
			const event = DomainEventDummyMother.random();

			await eventBus.publish([event]);

			await dummySubscriber.assertConsumedEvents([event]);
		});

		it('should retry failed domain events', async () => {
			dummySubscriber = DomainEventSubscriberDummy.failsFirstTime();
			subscribers = new DomainEventSubscribers([dummySubscriber]);
			await configurer.configure({ exchange, subscribers: [dummySubscriber] });
			const eventBus = new RabbitMQEventBus({
				failoverPublisher,
				connection,
				exchange,
				queueNameFormatter,
				maxRetries: 3,
			});
			await eventBus.addSubscribers(subscribers);
			const event = DomainEventDummyMother.random();

			await eventBus.publish([event]);

			await dummySubscriber.assertConsumedEvents([event]);
		});

		it('it should send events to dead letter after retry failed', async () => {
			dummySubscriber = DomainEventSubscriberDummy.alwaysFails();
			subscribers = new DomainEventSubscribers([dummySubscriber]);
			await configurer.configure({ exchange, subscribers: [dummySubscriber] });
			const eventBus = new RabbitMQEventBus({
				failoverPublisher,
				connection,
				exchange,
				queueNameFormatter,
				maxRetries: 3,
			});
			await eventBus.addSubscribers(subscribers);
			const event = DomainEventDummyMother.random();

			await eventBus.publish([event]);

			await dummySubscriber.assertConsumedEvents([]);
			assertDeadLetter([event]);
		});

		async function cleanEnvironment() {
			await connection.deleteQueue(queueNameFormatter.format(dummySubscriber));
			await connection.deleteQueue(
				queueNameFormatter.formatRetry(dummySubscriber)
			);
			await connection.deleteQueue(
				queueNameFormatter.formatDeadLetter(dummySubscriber)
			);
		}

		async function assertDeadLetter(events: DomainEvent[]) {
			const deadLetterQueue =
				queueNameFormatter.formatDeadLetter(dummySubscriber);
			const deadLetterSubscriber = new DomainEventSubscriberDummy();
			const deadLetterSubscribers = new DomainEventSubscribers([
				dummySubscriber,
			]);
			const deserializer = DomainEventDeserializer.configure(
				deadLetterSubscribers
			);
			const consumer = new RabbitMQConsumer({
				subscriber: deadLetterSubscriber,
				deserializer,
				connection,
				maxRetries: 3,
				queueName: deadLetterQueue,
				exchange,
			});
			await connection.consume(
				deadLetterQueue,
				consumer.onMessage.bind(consumer)
			);

			await deadLetterSubscriber.assertConsumedEvents(events);
		}
	});
});
 */
/* 

domainEventDeserializer
DomainEventFailoverPublisher
DomainEventJsonSerializer
DomainEventSubscriber
--------rabbit--------

RabbitMQConfigFactory
RabbitMQConnection
RabbitMQConsumerFactory
RabbitMQConsumer
RabbitMQEventBus
RabbitMQConfigurer

*/
