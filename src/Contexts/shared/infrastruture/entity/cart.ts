import {
	Column,
	Entity,
	JoinColumn,
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

@Entity({ name: 'cart' })
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
	purchasePrice: number;

	@Column({
		type: 'enum',
		enum: CartStatusEnum,
		default: CartStatusEnum.NOT_PROCESSED,
	})
	status: string;

	@OneToMany(() => ProductEntity, product => product.productId)
	@JoinColumn({ name: 'productId' })
	product: ProductEntity;
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

	@Column()
	cartItemId: string;

	@OneToMany(() => CartItemEntity, cart => cart.cartItemId)
	@JoinColumn({ name: 'cartItems' })
	cartItems: CartItemEntity[];
}
