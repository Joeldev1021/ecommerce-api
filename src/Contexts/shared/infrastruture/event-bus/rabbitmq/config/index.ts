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
	username: process.env.RABBIT_USERNAME || 'guest',
	password: process.env.RABBIT_PASSWORD || 'guest',
	vhost: process.env.RABBIT_VHOST || '/',
	connection: {
		secure: false,
		hostname: process.env.RABBIT_HOSTNAME || 'localhost',
		port: parseInt(process.env.RABBIT_PORT!) || 5672,
	},
	exchangeName: process.env.EXCHANGE_NAME || 'domain_events',
	maxRetries: 3,
	retryTtl: 1000,
	moduleName: process.env.MODULE_NAME || 'mooc',
};
