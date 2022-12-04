import { NextFunction, Request, Response } from "express";
import categoryUpdateUsecase from "../../application/usecase/category-update.usecase";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";

class CategoryUpdateController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, state } = req.body;
    try {
      const category = categoryUpdateUsecase.execute(
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

export default new CategoryUpdateController();
