import { AplicationConflictException } from '@shared/application/errors/application-confilct.exception';
export class UserEmailAlreadyInUseException extends AplicationConflictException {
	constructor() {
		super('email already exists');
	}
}
