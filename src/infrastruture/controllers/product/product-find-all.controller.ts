import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";
import productFindAllUsecase from "../../../application/usecases/product/product-find-all.usecase";

class ProductFindAllController {
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const product = productFindAllUsecase.execute();
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductFindAllController();
