import 'reflect-metadata';
import express, { Application } from 'express';
import { TagEventHandler } from './dependency-injection/container';
import { registry } from 'tsyringe';
import { indexRoute } from './routes';
import { CategoryCreatedHandler } from '../../../Contexts/category/domain/events/category-created.handler';
@registry([
	{ token: TagEventHandler.EventHandler, useToken: CategoryCreatedHandler },
])
export class Server {
	private readonly app: Application;
	private readonly port: string;
	constructor() {
		this.app = express();
		this.port = '5000';
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use('/api', indexRoute);
	}

	getServer(): Application {
		return this.app;
	}

	listen(): void {
		this.app.listen(this.port, () => {
			console.log('server running in the port 🔥 ', this.port);
		});
	}
}
