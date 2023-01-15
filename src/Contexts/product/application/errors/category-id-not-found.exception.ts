import { AplicationConflictException } from '../../../shared/application/errors/application-confilct.exception';

export class CategoryIdNotFoundException extends AplicationConflictException {
	constructor() {
		super('category id not found');
	}
}
