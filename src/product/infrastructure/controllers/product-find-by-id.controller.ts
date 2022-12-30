import { NextFunction, Request, Response } from "express";
import { ProductFindByIdUseCase } from "../../application/usecases/product-find-by-id.usecase";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";

@injectable()
export class ProductFindByIdController {
  constructor(
    @inject(containerTypes.productFindByIdController)
    private _productFindByIdUseCase: ProductFindByIdUseCase
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.id;
    try {
      const product = this._productFindByIdUseCase.execute(
        new UuidVO(productId)
      );
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}
