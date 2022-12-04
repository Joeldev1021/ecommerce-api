import { NextFunction, Request, Response } from "express";
import productUpdateUsecase from "../../application/usecases/product-update.usecase";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";

class ProductUpdateController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, state } = req.body;
    try {
      const product = productUpdateUsecase.execute(
        new UuidVO(id),
        new NameVO(name),
        new DescriptionVO(description),
        new StateVO(state)
      );
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductUpdateController();
