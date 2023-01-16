import { Query } from '../../../shared/domain/query';

export class CategoryFindByIdQuery extends Query {
	constructor(readonly id: string) {
		super();
	}
}
