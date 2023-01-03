import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export interface IConnectionSettings {
	username: string;
	password: string;
	vhost: string;
	connection: {
		hostname: string;
		port: number;
		secure: boolean;
	};
	exchangeName: string;
	maxRetries: number;
	moduleName: string;
}

export const configSettings: IConnectionSettings = {
	username: 'guest',
	password: 'guest',
	vhost: '/',
	connection: {
		hostname: 'localhost',
		port: 5672,
		secure: false,
	},
	exchangeName: 'domain_events',
	maxRetries: 3,
	moduleName: 'mooc',
};
