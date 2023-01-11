import { Query } from '../query';
import { IResponse } from './response';

export interface IQueryHandler<Q extends Query, R extends IResponse> {
	subscribeTo(): Query;
	handle(query: Q): Promise<R>;
}
