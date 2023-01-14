import { AplicationConflictException } from '../../../shared/application/errors/application-confilct.exception';

export class ProductNotFoundException extends AplicationConflictException {
	constructor() {
		super('product not found');
	}
}
