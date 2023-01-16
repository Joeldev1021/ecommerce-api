import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryColumn,
} from 'typeorm';
import { CategoryEntity } from './category';

@Entity({ name: 'products' })
export class ProductEntity {
	@PrimaryColumn()
	productId: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	imageUrl: string;

	@Column()
	quantity: number;

	@Column()
	categoryId: string;

	@ManyToOne(() => CategoryEntity, category => category.products)
	@JoinColumn({ name: 'categoryId' })
	category: CategoryEntity;

	@Column()
	price: number;

	@Column({ default: true })
	state: boolean;

	@CreateDateColumn()
	createdAt: Date;
}
