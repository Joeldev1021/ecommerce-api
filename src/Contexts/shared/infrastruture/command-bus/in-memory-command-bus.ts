import { injectable, multiInject } from 'inversify';
import { TagHandler } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { Command } from '../../domain/command';
import { CommandNotRegisteredError } from '../../domain/errors/command-not-registered.error';
import { ICommandBus } from '../../domain/interface/command-bust';
import { ICommandHandler } from '../../domain/interface/command-handler';

@injectable()
export class InMemoryCommandBus implements ICommandBus {
	private commandHandlers: Map<Command, ICommandHandler<Command>>;
	constructor(
		@multiInject(TagHandler.CommandHandlers)
		_handlers: Array<ICommandHandler<Command>>
	) {
		this.commandHandlers = new Map();
		_handlers.forEach(commandHandler => {
			this.commandHandlers.set(commandHandler.subscribeTo(), commandHandler);
		});
	}

	async dispatch(command: Command): Promise<void> {
		const handler = this.commandHandlers.get(command.constructor);

		if (!handler) throw new CommandNotRegisteredError(command);

		await handler.handle(command);
	}
}
