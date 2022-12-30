import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import categoryRepository, {
  CategoryRepository,
} from "../../infrastructure/repositories/category.repository";

@injectable()
export class CategoryDeleteUseCase {
  constructor(
    @inject(containerTypes.categoryRepository)
    private categoryRepository: CategoryRepository
  ) {}

  async execute(id: UuidVO) {
    return categoryRepository.delete(id);
  }
}
