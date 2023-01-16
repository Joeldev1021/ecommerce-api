import { CategoryModel } from '../../domain/models/category.model';
import { IResponse } from '../../../shared/domain/interface/response';

export class CategoryFindByIdResponse implements IResponse {
	constructor(readonly categories: CategoryModel | null) {}
}
