import { NextFunction, Request, Response } from "express";
import categoryFindByIdUsecase from "../../../application/usecases/category/category-find-by-id.usecase";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";

class CategoryFindByIdController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const categoryId = req.params.id;
    try {
      const category = categoryFindByIdUsecase.execute(new UuidVO(categoryId));
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryFindByIdController();
