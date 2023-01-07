import { Query } from '../query';
import { IResponse } from './response';

export interface IQueryBus {
	ask<R extends IResponse>(query: Query): Promise<R>;
}
