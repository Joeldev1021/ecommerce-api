import { injectable } from 'inversify';
import { DomainEvent } from '../../../../domain/domain-event';
import { IDomainEventSubscriber } from '../../../../domain/interface/domain-event-subscriber';

@injectable()
export class RabbitMQQueueFormatter {
	private moduleName: string;
	constructor() {
		this.moduleName = 'mooc';
	}

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
