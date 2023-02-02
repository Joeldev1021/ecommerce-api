import { CartItemEntity } from './../entity/cart-item';
import { BrandEntity } from './../entity/brand';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '../entity/category';
import { ProductEntity } from '../entity/product';
import { UserEntity } from '../entity/user';

import { config } from 'dotenv';
import { CartEntity } from '../entity/cart';
config();

export class TypeOrmClientFactory {
	static connection?: DataSource;

	static async createConnection(): Promise<void> {
		if (this.connection !== undefined) return;
		try {
			const dataSource = new DataSource({
				type: 'mysql',
				host: 'localhost',
				port: 23306,
				username: process.env.MYSQL_USER,
				password: process.env.MYSQL_PASSWORD,
				database: process.env.DB_NAME,
				entities: [
					UserEntity,
					CategoryEntity,
					ProductEntity,
					BrandEntity,
					CartItemEntity,
					CartEntity,
				],
				synchronize: true,
				logging: false,
			});

			const connection = await dataSource.initialize();
			console.log('connection to database');
			this.connection = connection;
		} catch (error) {
			throw new Error(`Typeorm connection error`);
		}
	}

	static async getConnection(): Promise<DataSource> {
		if (!this.connection) throw new Error(`Typeorm connection error`);

		return this.connection;
	}
}
