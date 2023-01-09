import { Query } from '../../domain/query';
import { IQueryHandler } from '../../domain/interface/query-handler';
import { QueryNotRegisteredError } from '../../domain/errors/query-not-registered.error';
import { IResponse } from '../../domain/interface/response';

export class QueryHandlers extends Map<Query, IQueryHandler<Query, IResponse>> {
	private queryHandlers: Array<IQueryHandler<Query, IResponse>>;
	constructor() {
		super();
		console.log('query handlers');
		this.queryHandlers.forEach(queryhandler => {
			this.set(queryhandler.subscribeTo, queryhandler);
		});
	}

	public get(query: Query): IQueryHandler<Query, IResponse> {
		console.log('queryhandlers ');
		const queryHandler = super.get(query.constructor);
		if (!queryHandler) throw new QueryNotRegisteredError(query);

		return queryHandler;
	}
}
