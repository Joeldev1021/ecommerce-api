import { Query } from '../../../shared/domain/query';

export class CategoryFindAllQuery extends Query {
	constructor(readonly offset?: number, readonly limit?: number) {
		super();
	}
}
