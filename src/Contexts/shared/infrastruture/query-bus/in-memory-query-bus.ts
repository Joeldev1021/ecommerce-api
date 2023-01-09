import { inject, injectable, injectAll } from 'tsyringe';
import { Query } from '../../domain/query';
import { IQueryBus } from '../../domain/interface/query-bus';
import { IResponse } from '../../domain/interface/response';
import { QueryHandlers } from './query-handlers';
import { CONTAINER_TYPE } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { TagHandler } from '../../../../apps/mooc/backend/dependency-injection/container';
import { CategoryFindCounterQueryHandler } from '../../../category/application/usecase/find/category-find-counter.queryHandler';
import { IQueryHandler } from '../../domain/interface/query-handler';
import { QueryNotRegisteredError } from '../../domain/errors/query-not-registered.error';

/* @registry([
	{ token: TagHandler.queryHandler, useClass: CategoryFindCounterQueryHandler },
]) */
@injectable()
export class InMemoryQueryBus implements IQueryBus {
	private handlers: Map<Query, IQueryHandler<Query, IResponse>>;
	constructor(
		@injectAll('QueryHandler')
		private _queryHandlers: Array<IQueryHandler<Query, IResponse>>
	) {
		this.handlers = new Map();
		console.log(_queryHandlers);
		_queryHandlers.forEach(queryHandler => {
			this.handlers.set(queryHandler.subscribeTo(), queryHandler);
		});
	}

	async ask<R extends IResponse>(query: Query): Promise<R> {
		console.log('inMemoryQueryBus');
		const handler = this.handlers.get(query.constructor);
		if (!handler) throw new QueryNotRegisteredError(query);

		return handler.handle(query) as Promise<R>;
	}
}
