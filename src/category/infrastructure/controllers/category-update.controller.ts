import { NextFunction, Request, Response } from "express";
import { CategoryUpdateUseCase } from "../../application/usecase/category-update.usecase";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";

export class CategoryUpdateController {
  private _categoryUpdateUseCase;
  constructor(dependencies: { categoryUpdateUseCase: CategoryUpdateUseCase }) {
    this._categoryUpdateUseCase = dependencies.categoryUpdateUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, state } = req.body;
    try {
      const category = await this._categoryUpdateUseCase.execute(
        new UuidVO(id),
        new NameVO(name),
        new DescriptionVO(description),
        new StateVO(state)
      );
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}
