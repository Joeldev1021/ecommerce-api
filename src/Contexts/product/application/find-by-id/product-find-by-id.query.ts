import { Query } from '../../../shared/domain/query';

export class ProductFindByIdQuery extends Query {
	constructor(readonly id: string) {
		super();
	}
}
