import { CartId } from './../value-object/cart-id.vo';
import {
	AggregateRoot,
	AggregateRootPrimitives,
} from '../../../shared/domain/aggregate-root';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';

export interface ICartPrimitives extends AggregateRootPrimitives {
	readonly userId: string;
	readonly cartId: string;
}

export class CartModel extends AggregateRoot {
	/**
	 * The constructor function is a function that is called when a new instance of a class is created
	 * @param {CartId} cartId - The ID of the cart that the user is adding the product to.
	 * @param {UuidVO} userId - The user ID of the user who owns the cart.
	 */
	constructor(readonly cartId: CartId, readonly userId: UuidVO) {
		super();
	}

	toPrimitives(): ICartPrimitives {
		return {
			cartId: this.cartId.value,
			userId: this.userId.value,
		};
	}
}
