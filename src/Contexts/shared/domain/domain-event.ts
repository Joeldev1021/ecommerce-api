import uuid from 'uuid-random';

type DomainEventAttributes = any;

interface IDomainEventPrimitives {
	aggregateId: string;
	eventId: string;
	occurredOn: Date;
	attributes: DomainEventAttributes;
}

interface IDomainEventParams {
	aggregateId: string;
	eventName: string;
	eventId?: string;
	occurredOn?: Date;
}

export abstract class DomainEvent {
	static EVENT_NAME: string;
	static fromPrimitives: (primitives: IDomainEventPrimitives) => DomainEvent;

	readonly aggregateId: string;
	readonly eventName: string;
	readonly eventId: string;
	readonly occurredOn: Date;

	constructor(params: IDomainEventParams) {
		this.aggregateId = params.aggregateId;
		this.eventName = params.eventName;
		this.eventId = params.eventId || uuid();
		this.occurredOn = params.occurredOn || new Date();
	}

	abstract toPrimitives(): DomainEventAttributes;
}

export interface IDomainEventClass {
	EVENT_NAME: string;
	fromPrimitives(primitives: IDomainEventPrimitives): DomainEvent;
}
