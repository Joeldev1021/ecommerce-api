import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryColumn,
} from 'typeorm';
import { ProductEntity } from './product';

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
	@PrimaryColumn()
	category_id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column({ nullable: true })
	image: string;

	@Column({ default: true })
	state: boolean;

	@Column()
	product_ids: string;

	@OneToMany(() => ProductEntity, product => product.category)
	@JoinColumn({ name: 'product_ids' })
	products: ProductEntity[];
}
