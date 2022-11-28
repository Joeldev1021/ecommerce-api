import { AplicationConflictException } from "./application-confilct.exception";

export class ProductIdAlreadyInUseException extends AplicationConflictException {
  constructor() {
    super("produc id already exists");
  }
}
