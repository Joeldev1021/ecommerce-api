import { ProductModel } from './../../domain/models/product.model';
import { IResponse } from '../../../shared/domain/interface/response';

export class ProductFindAllResponse implements IResponse {
	constructor(readonly products: ProductModel[] | null) {}
}
