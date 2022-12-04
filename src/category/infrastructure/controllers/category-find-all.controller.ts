import { NextFunction, Request, Response } from "express";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import categoryFindAllUsecase from "../../application/usecase/category-find-all.usecase";

class CategoryFindAllController {
  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const category = categoryFindAllUsecase.execute();
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryFindAllController();
