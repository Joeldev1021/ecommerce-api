import { DomainEvent } from '../../../../../../src/Contexts/shared/domain/domain-event';
import { UuidMother } from '../../../../shared/domain/uuid.mother';

export class DomainEventDummy extends DomainEvent {
	static readonly EVENT_NAME = 'dummy';

	constructor(data: {
		aggregateId: string;
		eventId?: string;
		occurredOn?: Date;
	}) {
		const { aggregateId, eventId, occurredOn } = data;
		super({
			eventName: DomainEventDummy.EVENT_NAME,
			aggregateId,
			eventId,
			occurredOn,
		});
	}

	toPrimitives(): object {
		return {};
	}

	static fromPrimitives(params: {
		aggregateId: string;
		attributes: {};
		eventId: string;
		occurredOn: Date;
	}): DomainEventDummy {
		const { aggregateId, eventId, occurredOn } = params;
		return new DomainEventDummy({
			aggregateId,
			eventId,
			occurredOn,
		});
	}
}

export class DomainEventDummyMother {
	static random(): DomainEventDummy {
		return new DomainEventDummy({
			aggregateId: UuidMother.random(),
			eventId: UuidMother.random(),
			occurredOn: new Date(),
		});
	}
}
