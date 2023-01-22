import { Command } from '../../../shared/domain/command';

export class UserRegisterCommand extends Command {
	constructor(
		public readonly id: string,
		public name: string,
		public email: string,
		public password: string,
		public state: boolean,
		public role?: string
	) {
		super();
	}
}
