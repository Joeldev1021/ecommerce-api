import { NextFunction, Request, Response } from "express";
import { DescriptionVO } from "../../../shared/domain/value-objects/description.vo";
import { NameVO } from "../../../shared/domain/value-objects/name.vo";
import { PriceVO } from "../../domain/value-objects/price.vo";
import { StateVO } from "../../../shared/domain/value-objects/state.vo";
import { UuidVO } from "../../../shared/domain/value-objects/uuid.vo";
import { QuantityVO } from "../../domain/value-objects/quantity.vo";
import { ProductCreateUseCase } from "../../application/usecases/product-create-usecase";

export class ProductCreateController {
  private _productCreateUseCase;
  constructor(dependencies: { productCreateUseCase: ProductCreateUseCase }) {
    this._productCreateUseCase = dependencies.productCreateUseCase;
  }

  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, categoryId, price, quantity, state } =
      req.body;
    try {
      const product = this._productCreateUseCase.execute(
        new UuidVO(id),
        new NameVO(name),
        new DescriptionVO(description),
        new UuidVO(categoryId),
        new PriceVO(price),
        new QuantityVO(quantity),
        new StateVO(state)
      );
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}
