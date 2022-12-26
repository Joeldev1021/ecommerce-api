import {
  DomainEvent,
  IDomainEventClass,
} from "../../../shared/domain/domain-event";
import { IDomainEventSubscriber } from "../../../shared/domain/domain-event-subscriber";
import { CategoryCreatedEvent } from "./category-created.event";

export class CategoryCreatedHandler
  implements IDomainEventSubscriber<DomainEvent>
{
  subscribedTo(): IDomainEventClass[] {
    return [CategoryCreatedEvent];
  }

  async on(event: CategoryCreatedEvent): Promise<void> {
    const { eventId, occurredOn } = event;
    console.log("categoryCreatedEVent", eventId);
  }
}
