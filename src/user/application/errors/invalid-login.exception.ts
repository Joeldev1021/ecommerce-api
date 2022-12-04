import { AplicationConflictException } from "./application-confilct.exception";

export class InvalidLoginException extends AplicationConflictException {
    constructor() {
        super("invalid credentials login")
    }
}