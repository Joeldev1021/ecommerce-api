import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { CartItemEntity } from './cart-item';
import { UserEntity } from './user';

@Entity({ name: 'cart' })
export class CartEntity {
	@PrimaryColumn()
	cartId: string;

	@OneToOne(() => UserEntity, user => user.userId)
	@Column()
	userId: string;

	@Column()
	createdAt: Date;

	@OneToMany(() => CartItemEntity, cartItem => cartItem.cartId)
	cartItems: CartItemEntity[];
}
