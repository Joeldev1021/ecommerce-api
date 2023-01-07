import { Command } from '../command';

export class CommandNotRegisteredError extends Error {
	constructor(command: Command) {
		super(
			`the Command <${command.constructor.name}> hasn't a command handler associated`
		);
	}
}
