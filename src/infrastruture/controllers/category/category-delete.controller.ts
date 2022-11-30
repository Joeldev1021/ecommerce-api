import { NextFunction, Request, Response } from "express";
import categoryDeleteUsecase from "../../../application/usecases/category/category-delete.usecase";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";

class CategoryDeleteController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const categoryId = req.params.id;
    try {
      const category = categoryDeleteUsecase.execute(new UuidVO(categoryId));
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryDeleteController();
