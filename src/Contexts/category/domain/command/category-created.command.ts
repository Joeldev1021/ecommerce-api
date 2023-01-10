import { Command } from '../../../shared/domain/command';

export class CategoryCreateCommand extends Command {
	constructor(
		public readonly id: string,
		public name: string,
		public description: string,
		public state: boolean
	) {
		super();
	}
}
