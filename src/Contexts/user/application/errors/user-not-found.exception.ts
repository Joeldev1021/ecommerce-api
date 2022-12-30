import { AplicationConflictException } from '@shared/application/errors/application-confilct.exception';

export class UserNotFoundException extends AplicationConflictException {
	constructor() {
		super('user not found');
	}
}
