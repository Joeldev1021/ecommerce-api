import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { ProductDeleteUseCase } from "../../application/usecases/product-delete.usecase";

@injectable()
export class ProductDeleteController {
  constructor(
    @inject(containerTypes.productDeleteUseCase)
    private _productDeleteUseCase: ProductDeleteUseCase
  ) {}

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
