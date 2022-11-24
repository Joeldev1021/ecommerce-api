import { AplicationConflictException } from "./application-confilct.exception";

export class UserIdAlreadyInUseException extends AplicationConflictException {
    constructor() {
        super("user id already exists")
    }
}