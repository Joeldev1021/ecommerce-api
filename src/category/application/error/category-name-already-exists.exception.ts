import { AplicationConflictException } from "../../../shared/application/errors/application-confilct.exception";

export class CategoryNameAlreadyInUseException extends AplicationConflictException {
  constructor() {
    super("category name already exists");
  }
}
