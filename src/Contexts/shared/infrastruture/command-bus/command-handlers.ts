import { injectable } from 'tsyringe';
import { Command } from '../../domain/command';
import { ICommandHandler } from '../../domain/interface/command-handler';
import { CommandNotRegisteredError } from '../../domain/errors/command-not-registered.error';

@injectable()
export class CommandHandlers extends Map<Command, ICommandHandler<Command>> {
	constructor(commandHandlers: Array<ICommandHandler<Command>>) {
		super();
		commandHandlers.forEach(commandHandler => {
			this.set(commandHandler.subscribeTo(), commandHandler);
		});
	}

	public get(command: Command): ICommandHandler<Command> {
		const commandHandler = super.get(command.constructor);

		if (!commandHandler) throw new CommandNotRegisteredError(command);

		return commandHandler;
	}
}
