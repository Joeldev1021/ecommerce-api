import { DomainEvent } from '../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../domain/domain-event-subscriber';

export class RabbitMQqueueFormatter {
	constructor(private moduleName: string) {}

	format(subscriber: IDomainEventSubscriber<DomainEvent>): string {
		const value = subscriber.constructor.name;
		const name = value
			.split(/(?=[A-Z])/)
			.join('_')
			.toLowerCase();
		return `${this.moduleName}.${name}`;
	}

	formatRetry(subscriber: IDomainEventSubscriber<DomainEvent>): string {
		const name = this.format(subscriber);
		return `retry.${name}`;
	}

	formatDeadLetter(subscriber: IDomainEventSubscriber<DomainEvent>): string {
		const name = this.format(subscriber);
		return `dead_letter.${name}`;
	}
}
