/* import { DataSource } from 'typeorm';
import { Category } from '../entity/category';
import { Product } from '../entity/product';
import { User } from '../entity/user';
import { config } from 'dotenv';

config();
const AppDataSource = new DataSource({});

export const connectDb = async (): Promise<void> => {
	AppDataSource.initialize()
		.then(() => console.log('connect to database'))
		.catch(err => console.log('error connect db', err));
} */
