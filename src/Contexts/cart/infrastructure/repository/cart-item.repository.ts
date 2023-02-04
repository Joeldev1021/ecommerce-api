import { injectable } from 'inversify';
import { CartItemEntity } from './../../../shared/infrastruture/entity/cart-item';
import { ICartItemRepository } from './../../domain/repository/cart-item.repository';
import {
	CartItemModel,
	ICartItemPrimitives,
} from './../../domain/models/cart-item.model';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';
import { ObjectType } from 'typeorm';
import { CartItemId } from '../../domain/value-object/cart-item-id.vo';

@injectable()
export class CartItemRepository
	extends TypeOrmRepository<CartItemModel, ICartItemPrimitives>
	implements ICartItemRepository
{
	entitySchema(): ObjectType<CartItemModel> {
		return CartItemEntity;
	}

	async findAll(): Promise<CartItemModel[] | null> {
		const repository = await this.repository();
		const cartItem = await repository.find();
		return cartItem.map(item => CartItemModel.toDomain(item));
	}

	async save(cartItems: CartItemModel[]): Promise<CartItemModel[]> {
		const repository = await this.repository();
		const items = await Promise.all(
			cartItems.map(async item => repository.create(item.toPrimitives()))
		);

		return items.map(item => CartItemModel.toDomain(item));
	}

	async findById(id: CartItemId): Promise<CartItemModel | null> {
		const repository = await this.repository();
		const cartItem = await repository.findOne({
			where: { cartItemId: id.value },
		});
		if (!cartItem) return null;
		return CartItemModel.toDomain(cartItem);
	}

	async remove(id: CartItemId): Promise<void> {}
}
