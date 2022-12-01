import { NextFunction, Request, Response } from "express";
import productDeleteUsecase from "../../../application/usecases/product/product-delete.usecase";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";

class ProductDeleteController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.id;
    try {
      const product = productDeleteUsecase.execute(new UuidVO(productId));
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductDeleteController();
