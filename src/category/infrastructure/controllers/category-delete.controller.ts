import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryDeleteUseCase } from "../../application/usecase/category-delete.usecase";

@injectable()
export class CategoryDeleteController {
  constructor(
    @inject(containerTypes.categoryDeleteUseCase)
    private _categoryDeleteUseCase: CategoryDeleteUseCase
  ) {}

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
