import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryFindByIdUseCase } from "../../application/usecase/category-find-by-id.usecase";

@injectable()
export class CategoryFindByIdController {
  constructor(
    @inject(containerTypes.productFindByIdUseCase)
    private _categoryFindByIdUseCase: CategoryFindByIdUseCase
  ) {}

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
