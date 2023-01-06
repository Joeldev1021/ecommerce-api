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
	retryTtl: number;
	moduleName: string;
}

export const configSettings: IConnectionSettings = {
	username: 'guest',
	password: 'guest',
	vhost: '/',
	connection: {
		secure: false,
		hostname: 'localhost',
		port: 5672,
	},
	exchangeName: 'domain_events',
	maxRetries: 3,
	retryTtl: 1000,
	moduleName: 'mooc',
};
