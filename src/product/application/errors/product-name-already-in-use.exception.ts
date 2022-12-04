import { AplicationConflictException } from "../../../shared/application/errors/application-confilct.exception";

export class ProductNameAlreadyInUseException extends AplicationConflictException {
  constructor() {
    super("produc Name already exists");
  }
}
