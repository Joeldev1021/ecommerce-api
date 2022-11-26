import { AplicationConflictException } from "./application-confilct.exception";

export class CategoryNameAlreadyInUseException extends AplicationConflictException {
  constructor() {
    super("category name already exists");
  }
}
