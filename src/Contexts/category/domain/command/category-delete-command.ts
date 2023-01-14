import { Command } from '../../../shared/domain/command';

export class CategoryDeleteCommand extends Command {
	constructor(public readonly id: string) {
		super();
	}
}
