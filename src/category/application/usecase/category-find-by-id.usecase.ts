import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ICategoryRepository } from "../../domain/repositories/category.repository";
import categoryRepository, {
  CategoryRepository,
} from "../../infrastructure/repositories/category.repository";

export class CategoryFindByIdUseCase {
  private _categoryRepository: ICategoryRepository;
  constructor(dependencies: { categoryRepository: CategoryRepository }) {
    this._categoryRepository = dependencies.categoryRepository;
  }

  async execute(id: UuidVO) {
    return categoryRepository.findById(id);
  }
}
