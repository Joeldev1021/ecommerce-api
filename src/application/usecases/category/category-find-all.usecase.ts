import categoryRepository from "../../../infrastruture/repositories/category.repository";

class CategoryFindAllUseCase {
  async execute() {
    return categoryRepository.findAll();
  }
}

export default new CategoryFindAllUseCase();
