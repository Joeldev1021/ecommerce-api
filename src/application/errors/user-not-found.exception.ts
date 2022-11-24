import { AplicationConflictException } from "./application-confilct.exception";

export class UserNotFoundException extends AplicationConflictException {
    constructor() {
        super("user not found")
    }
}