import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryDeleteUseCase } from "../../application/usecase/category-delete.usecase";
export class CategoryDeleteController {
  private _categoryDeleteUseCase;
  constructor(dependencies: { categoryDeleteUseCase: CategoryDeleteUseCase }) {
    this._categoryDeleteUseCase = dependencies.categoryDeleteUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    const categoryId = req.params.id;
    try {
      const category = await this._categoryDeleteUseCase.execute(
        new UuidVO(categoryId)
      );
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}
