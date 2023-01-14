import { IResponse } from '../../../shared/domain/interface/response';
import { CategoryModel } from '../../domain/models/category.model';

export class CategoryFindAllResponse implements IResponse {
	constructor(readonly categories: CategoryModel[] | null) {}
}
