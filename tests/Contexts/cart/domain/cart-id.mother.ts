import { UuidMother } from './../../shared/domain/uuid.mother';
import { CartId } from './../../../../src/Contexts/cart/domain/value-object/cart-id.vo';
export class CartIdMother {
	static create(value: string): CartId {
		return new CartId(value);
	}

	static random(): CartId {
		return this.create(UuidMother.random());
	}
}
