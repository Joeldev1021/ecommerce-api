import { Query } from '../../../shared/domain/query';

export class UserLoginQuery extends Query {
	constructor(readonly email: string, readonly password: string) {
		super();
	}
}
