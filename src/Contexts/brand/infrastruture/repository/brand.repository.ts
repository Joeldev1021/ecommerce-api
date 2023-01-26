import { BrandModel } from "../../domain/models/brand.model";
import { IBrandRepository } from "../../domain/repository/brand.repository";
import { BrandName } from "../../domain/value-objects/brand-name.vo";

export class BrandRepository implements IBrandRepository {
  async findByName(brandName: BrandName): Promise<BrandModel | null> {
    return null
  }

  async create(brand: BrandModel): Promise<void> {
    null
  }
}
