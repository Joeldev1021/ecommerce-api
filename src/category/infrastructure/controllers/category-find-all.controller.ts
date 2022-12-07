import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryFindAllUseCase } from "../../application/usecase/category-find-all.usecase";

export class CategoryFindAllController {
  private _categoryFindAllUseCase;
  constructor(dependencies: {
    categoryFindAllUseCase: CategoryFindAllUseCase;
  }) {
    this._categoryFindAllUseCase = dependencies.categoryFindAllUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this._categoryFindAllUseCase.execute();

      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}
