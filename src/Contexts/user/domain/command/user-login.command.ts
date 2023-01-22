import { Command } from '../../../shared/domain/command';

export class UserLoginCommand extends Command {
	constructor(public email: string, public password: string) {
		super();
	}
}
