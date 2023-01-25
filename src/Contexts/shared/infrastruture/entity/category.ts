import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ProductEntity } from './product';

@Entity({ name: 'category' })
export class CategoryEntity {
	@PrimaryColumn()
	categoryId: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column({ nullable: true })
	image: string;

	@Column({ default: true })
	state: boolean;

	@OneToMany(() => ProductEntity, product => product.categoryId)
	products: ProductEntity[];
}
