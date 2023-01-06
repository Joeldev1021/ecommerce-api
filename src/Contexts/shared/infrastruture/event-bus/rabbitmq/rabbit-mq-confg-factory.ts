import { injectable } from 'tsyringe';
import { configSettings, IConnectionSettings } from './config';

@injectable()
export class RabbitMQConfigFactory {
	public createConfig(): IConnectionSettings {
		return configSettings;
	}
}
