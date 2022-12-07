import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryFindByIdUseCase } from "../../application/usecase/category-find-by-id.usecase";

export class CategoryFindByIdController {
  private _categoryFindByIdUseCase;
  constructor(dependencies: {
    categoryFindByIdUseCase: CategoryFindByIdUseCase;
  }) {
    this._categoryFindByIdUseCase = dependencies.categoryFindByIdUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    const categoryId = req.params.id;
    try {
      const category = await this._categoryFindByIdUseCase.execute(
        new UuidVO(categoryId)
      );
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}
