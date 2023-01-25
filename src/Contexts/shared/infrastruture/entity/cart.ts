import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryColumn,
} from 'typeorm';
import { ProductEntity } from './product';
import { UserEntity } from './user';

export enum CartStatusEnum {
	NOT_PROCESSED = 'NOT_PROCESSED',
	NOT_PROCESSING = 'NOT_PROCESSING',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
	CANCELLED = 'CANCELLED',
}

@Entity({ name: 'cartItem' })
export class CartItemEntity {
	@PrimaryColumn()
	cartItemId: string;

	@Column({ default: 0 })
	quantity: number;

	@Column({ default: 0 })
	totalPrice: number;

	@Column()
	productId: string;

	@Column()
	cartId: string;

	@Column()
	purchasePrice: number;

	@Column({
		type: 'enum',
		enum: CartStatusEnum,
		default: CartStatusEnum.NOT_PROCESSED,
	})
	status: string;

	@OneToOne(() => ProductEntity, product => product.productId)
	@JoinColumn({ name: 'productId' })
	product: ProductEntity;

	@ManyToOne(() => CartEntity, cart => cart.cartId)
	@JoinColumn({ name: 'cartId' })
	cart: CartEntity;
}

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
