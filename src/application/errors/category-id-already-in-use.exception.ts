import { AplicationConflictException } from "./application-confilct.exception";

export class CategoryIdAlreadyInUseException extends AplicationConflictException {
  constructor() {
    super("category id already exists");
  }
}
