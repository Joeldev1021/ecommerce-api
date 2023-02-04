import { CartItemId } from './../value-object/cart-item-id.vo';
import { CartItemModel } from './../models/cart-item.model';
export interface ICartItemRepository {
	/* A function that takes in a CartItemId and returns a Promise of a CartItemModel or null. */
	findById(id: CartItemId): Promise<CartItemModel | null>;

	save(cartItems: CartItemModel[]): Promise<CartItemModel[]>;

	remove(id: CartItemId): Promise<void>;

	findAll(): Promise<CartItemModel[] | null>;
}
