import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { CategoryCreateUseCase } from "../../application/usecase/category-create.usecase";

export class CategoryCreateController {
  private _categoryCreateUseCase;
  constructor(dependencies: { categoryCreateUseCase: CategoryCreateUseCase }) {
    this._categoryCreateUseCase = dependencies.categoryCreateUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, state } = req.body;
    console.log(req.body);
    console.log("controller :)");
    try {
      const category = await this._categoryCreateUseCase.execute(
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
