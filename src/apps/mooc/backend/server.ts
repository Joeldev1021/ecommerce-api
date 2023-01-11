import 'reflect-metadata';
import express, { Application } from 'express';
import { indexRoute } from './routes';

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
