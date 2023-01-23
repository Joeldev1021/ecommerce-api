import { ProductModel } from './../../domain/models/product.model';
import { IResponse } from '../../../shared/domain/interface/response';

export class ProductFindByIdResponse implements IResponse {
	constructor(readonly product: ProductModel | null) {}
}
