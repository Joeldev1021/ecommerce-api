import { AplicationConflictException } from "./application-confilct.exception";

export class UserEmailAlreadyInUseException extends AplicationConflictException {
    constructor() {
        super("email already exists")
    }
}