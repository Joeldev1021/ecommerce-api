import { configSettings, IConnectionSettings } from './config';

export class RabbitMQConfigFactory {
	public createConfig(): IConnectionSettings {
		return configSettings;
	}
}
