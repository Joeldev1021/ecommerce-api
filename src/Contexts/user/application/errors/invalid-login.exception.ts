import { AplicationConflictException } from '../../../shared/application/errors/application-confilct.exception';

export class InvalidLoginException extends AplicationConflictException {
	constructor() {
		super('invalid credentials login');
	}
}
