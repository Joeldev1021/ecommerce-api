import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import categoryRepository, {
  CategoryRepository,
} from "../../infrastructure/repositories/category.repository";

@injectable()
export class CategoryFindAllUseCase {
  constructor(
    @inject(containerTypes.categoryRepository)
    private _categoryRepository: CategoryRepository
  ) {}

  async execute() {
    return categoryRepository.findAll();
  }
}
