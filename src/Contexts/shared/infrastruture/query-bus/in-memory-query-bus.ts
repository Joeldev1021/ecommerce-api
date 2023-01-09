import { injectable, multiInject } from 'inversify';
import { Query } from '../../domain/query';
import { IQueryBus } from '../../domain/interface/query-bus';
import { IResponse } from '../../domain/interface/response';
import { TagHandler } from '../../../../apps/mooc/backend/dependency-injection/container.types';
import { IQueryHandler } from '../../domain/interface/query-handler';
import { QueryNotRegisteredError } from '../../domain/errors/query-not-registered.error';

@injectable()
export class InMemoryQueryBus implements IQueryBus {
	private handlers: Map<Query, IQueryHandler<Query, IResponse>>;
	constructor(
		@multiInject(TagHandler.QueryHandlers)
		private _queryHandlers: Array<IQueryHandler<Query, IResponse>>
	) {
		this.handlers = new Map();
		_queryHandlers.forEach(queryHandler => {
			this.handlers.set(queryHandler.subscribeTo(), queryHandler);
		});
	}

	async ask<R extends IResponse>(query: Query): Promise<R> {
		console.log('inMemoryQueryBus');

		const handler = this.handlers.get(query.constructor);
		if (!handler) throw new QueryNotRegisteredError(query);
		console.log('handler', handler);
		return handler.handle(query) as Promise<R>;
	}
}
