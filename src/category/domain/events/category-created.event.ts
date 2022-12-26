import { DomainEvent } from "../../../shared/domain/domain-event";

type Payload = {
  readonly categoryId: string;
};

export class CategoryCreatedEvent extends DomainEvent {
  static readonly EVENT_NAME = CategoryCreatedEvent.name;

  readonly categoryId: string;

  constructor({
    aggregateId,
    categoryId,
    eventId,
    occurredOn,
  }: {
    aggregateId: string;
    eventId?: string;
    categoryId: string;
    occurredOn?: Date;
  }) {
    super({
      eventName: CategoryCreatedEvent.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn,
    });
    this.categoryId = categoryId;
  }

  toPrimitives(): Payload {
    const { categoryId } = this;
    return {
      categoryId,
    };
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: Payload;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const { aggregateId, attributes, occurredOn, eventId } = params;
    return new CategoryCreatedEvent({
      aggregateId,
      categoryId: attributes.categoryId,
      eventId,
      occurredOn,
    });
  }
}
