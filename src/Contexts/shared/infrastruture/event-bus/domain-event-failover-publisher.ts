import { Collection, MongoClient } from 'mongodb';
import { inject, injectable } from 'inversify';
import { CONTAINER_TYPES } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { DomainEvent } from '../../domain/domain-event';
import { DomainEventDeserializer } from './domain-event-deserializer';
import { DomainEventJsonSerializer } from './domain-event-json-serializer';

@injectable()
export class DomainEventFailoverPublisher {
	static collectionName = 'DomainEvents';

	private client: Promise<MongoClient>;
	constructor(
		@inject(CONTAINER_TYPES.domainEventDeserializer)
		private deserializer?: DomainEventDeserializer
	) {}

	protected async collection(): Promise<Collection> {
		return (await this.client)
			.db()
			.collection(DomainEventFailoverPublisher.collectionName);
	}

	setDeserializer(deserializer: DomainEventDeserializer): void {
		this.deserializer = deserializer;
	}

	async publish(event: DomainEvent): Promise<void> {
		const collection = await this.collection();

		const eventSerialized = DomainEventJsonSerializer.serialize(event);
		const options = { upsert: true };
		const update = { $set: { eventId: event.eventId, event: eventSerialized } };

		await collection.updateOne({ eventId: event.eventId }, update, options);
	}

	async consume(): Promise<Array<DomainEvent | undefined>> {
		const collection = await this.collection();
		const documents = await collection.find().limit(200).toArray();
		if (!this.deserializer) {
			throw new Error('Deserializer has not been set yet');
		}

		const events = documents.map(document =>
			this.deserializer?.deserialize(document.event)
		);

		return events.filter(Boolean);
	}
}
