import 'reflect-metadata';
import 'module-alias/register';
import express, { Application } from 'express';
import { TagEventHandler } from './dependency-injection/container';
import { registry } from 'tsyringe';
import { CategoryCreatedHandler } from '@category/domain/events/category-created.handler';
@registry([
	{ token: TagEventHandler.EventHandler, useToken: CategoryCreatedHandler },
	{ token: TagEventHandler.EventHandler, useToken: CategoryCreatedHandler },
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
