import { inject, injectable } from "inversify";
import { CONTAINER_TYPES } from "../../../../apps/mooc/backend/dependency-injection/container.types";
import { BrandModel } from "../../domain/models/brand.model";
import { IBrandRepository } from "../../domain/repository/brand.repository";
import { BrandDescription } from "../../domain/value-objects/brand-description.vo";
import { BrandId } from "../../domain/value-objects/brand-id.vo";
import { BrandName } from "../../domain/value-objects/brand-name.vo";
import { BrandState } from "../../domain/value-objects/brand-state.vo";

@injectable()
export class BrandCreateUseCase {

  constructor(
    @inject(CONTAINER_TYPES.brandRepository)
    private _brandRepository: IBrandRepository
  ) {
  }
  async execute(
    id: BrandId,
    name: BrandName,
    description: BrandDescription,
    logo: null,
    slug: '',
    state: BrandState
  ) {
    const existBrand = await this._brandRepository.findByName(name)

    if (existBrand) throw new Error('exist brand ')

    await this._brandRepository.create(
      new BrandModel(id, name, description, logo, slug, state)
    )
  }
}
