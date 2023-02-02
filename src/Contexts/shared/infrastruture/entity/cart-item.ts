import { ProductEntity } from './product';
import { CartEntity } from './cart';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryColumn,
} from 'typeorm';
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
