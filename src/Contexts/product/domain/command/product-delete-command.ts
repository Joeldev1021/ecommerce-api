import { Command } from '../../../shared/domain/command';

export class ProductDeleteCommand implements Command {
	constructor(readonly id: string) {}
}
