import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { containerTypes } from "../../../container.types";
import { ProductFindAllUseCase } from "../../application/usecases/product-find-all.usecase";

@injectable()
export class ProductFindAllController {
  constructor(
    @inject(containerTypes.productFindAllUseCase)
    private _productFindAllUseCase: ProductFindAllUseCase
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const product = this._productFindAllUseCase.execute();
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}
