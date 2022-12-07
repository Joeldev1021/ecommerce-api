import { ICategoryRepository } from "../../domain/repositories/category.repository";
import categoryRepository, {
  CategoryRepository,
} from "../../infrastructure/repositories/category.repository";

export class CategoryFindAllUseCase {
  private _categoryRepository: ICategoryRepository;
  constructor(dependencies: { categoryRepository: CategoryRepository }) {
    this._categoryRepository = dependencies.categoryRepository;
  }

  async execute() {
    return categoryRepository.findAll();
  }
}
