import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm';
import { CategoryEntity } from './category';

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
	@PrimaryColumn()
	product_id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	imageUrl: string;

	@Column()
	quantity: number;

	@Column()
	category_id: string;

	@ManyToOne(() => CategoryEntity, category => category.products)
	@JoinColumn({ name: 'category_id' })
	category: CategoryEntity;

	@Column()
	price: number;

	@Column({ default: true })
	state: boolean;

	@CreateDateColumn()
	createdAt: Date;
}
