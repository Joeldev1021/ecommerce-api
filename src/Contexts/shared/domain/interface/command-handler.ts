import { Command } from '../command';

export interface ICommandHandler<T extends Command> {
	subscribeTo(): Command;
	handle(Command: T): Promise<void>;
}
