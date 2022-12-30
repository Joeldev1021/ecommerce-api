import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryFindAllUseCase } from "../../application/usecase/category-find-all.usecase";

@injectable()
export class CategoryFindAllController {
  constructor(
    @inject(containerTypes.categoryFindAllUseCase)
    private _categoryFindAllUseCase: CategoryFindAllUseCase
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this._categoryFindAllUseCase.execute();

      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}
