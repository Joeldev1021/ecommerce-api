import { injectable } from 'tsyringe';
import { Command } from '../../domain/command';
import { ICommandBus } from '../../domain/interface/command-bust';
import { CommandHandlers } from './command-handlers';

@injectable()
export class InMemoryCommandBus implements ICommandBus {
	constructor(private commandHandlers: CommandHandlers) {}
	async dispatch(command: Command): Promise<void> {
		const handler = this.commandHandlers.get(command);

		await handler.handle(command);
	}
}
