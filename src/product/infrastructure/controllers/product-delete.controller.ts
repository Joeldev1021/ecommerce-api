import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ProductDeleteUseCase } from "../../application/usecases/product-delete.usecase";

export class ProductDeleteController {
  private _productDeleteUseCase;
  constructor(dependencies: { productDeleteUseCase: ProductDeleteUseCase }) {
    this._productDeleteUseCase = dependencies.productDeleteUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.id;
    try {
      const product = this._productDeleteUseCase.execute(new UuidVO(productId));
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}
