import { BrandModel } from "../models/brand.model";
import { BrandName } from "../value-objects/brand-name.vo";

export interface IBrandRepository {
  create(brand: BrandModel): Promise<void>

  findByName(brandName: BrandName): Promise<BrandModel | null>
}
