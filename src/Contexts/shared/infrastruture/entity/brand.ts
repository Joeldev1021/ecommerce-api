import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ProductEntity } from './product';

@Entity({ name: 'brand' })
export class BrandEntity {
	@PrimaryColumn() brandId: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	logo: string;

	@Column()
	slug: string;

	@Column()
	state: boolean;

	@Column()
	createdAt: Date;

	@OneToMany(() => ProductEntity, product => product.brandId)
	products: ProductEntity[];
}
