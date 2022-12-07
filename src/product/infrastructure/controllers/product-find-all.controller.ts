import { NextFunction, Request, Response } from "express";
import { ProductFindAllUseCase } from "../../application/usecases/product-find-all.usecase";

export class ProductFindAllController {
  private _productFindAllUseCase;
  constructor(dependencies: { productFindAllUseCase: ProductFindAllUseCase }) {
    this._productFindAllUseCase = dependencies.productFindAllUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const product = this._productFindAllUseCase.execute();
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}
