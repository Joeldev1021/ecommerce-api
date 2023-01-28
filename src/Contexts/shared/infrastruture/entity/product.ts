import { BrandEntity } from './brand';
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

	@Column()
	brandId: string;

	@Column()
	price: number;

	@Column({ default: true })
	state: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => BrandEntity, brand => brand.products)
	@JoinColumn({ name: 'brandId' })
	brand: BrandEntity;

	@ManyToOne(() => CategoryEntity, category => category.products)
	@JoinColumn({ name: 'categoryId' })
	category: CategoryEntity;
}
