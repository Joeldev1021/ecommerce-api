import { injectable } from 'tsyringe';
import { Query } from '../../domain/query';
import { IQueryBus } from '../../domain/interface/query-bus';
import { IResponse } from '../../domain/interface/response';
import { QueryHandlers } from './query-handlers';

@injectable()
export class InMemoryQueryBus implements IQueryBus {
	constructor(private queryHandlersInformation: QueryHandlers) {}

	async ask<R extends IResponse>(query: Query): Promise<R> {
		console.log('query-bus');
		const handler = this.queryHandlersInformation.get(query);
		return (await handler.handle(query)) as R;
	}
}
