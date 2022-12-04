import { AplicationConflictException } from "../../../shared/application/errors/application-confilct.exception";

export class ProductIdAlreadyInUseException extends AplicationConflictException {
  constructor() {
    super("produc id already exists");
  }
}
