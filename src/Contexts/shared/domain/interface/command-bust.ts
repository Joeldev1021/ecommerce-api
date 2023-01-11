import { Command } from '../command';
export interface ICommandBus {
	dispatch(command: Command): Promise<void>;
}
