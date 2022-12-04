import { NextFunction, Request, Response } from "express";
import productFindByIdUsecase from "../../application/usecases/product-find-by-id.usecase";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";

class ProductFindByIdController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const productId = req.params.id;
    try {
      const product = productFindByIdUsecase.execute(new UuidVO(productId));
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductFindByIdController();
