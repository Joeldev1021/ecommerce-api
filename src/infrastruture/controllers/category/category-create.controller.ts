import { NextFunction, Request, Response } from "express";
import categoryCreateUsecase from "../../../application/usecases/category/category-create.usecase";
import { DescriptionVO } from "../../../domain/value-objects/description.vo";
import { NameVO } from "../../../domain/value-objects/name.vo";
import { StateVO } from "../../../domain/value-objects/state.vo";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";

class CategoryCreateController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, state } = req.body;
    try {
      console.log(id);
      const category = categoryCreateUsecase.execute(
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

export default new CategoryCreateController();
