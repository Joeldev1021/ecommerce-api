import { NextFunction, Request, Response } from "express";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ProductFindByIdUseCase } from "../../application/usecases/product-find-by-id.usecase";

export class ProductUpdateController {
  private _productFindByIdUseCase;
  constructor(dependencies: {
    productFindByIdUseCase: ProductFindByIdUseCase;
  }) {
    this._productFindByIdUseCase = dependencies.productFindByIdUseCase;
  }
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, state } = req.body;
    try {
      const product = this._productFindByIdUseCase.execute(new UuidVO(id));
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}
