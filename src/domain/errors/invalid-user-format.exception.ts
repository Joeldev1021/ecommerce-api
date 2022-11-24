import { DomainFormatException } from "./domain-format.exception"

export class InvalidUserFormatException extends DomainFormatException {
    constructor() {
        super('invalid format user')
    }
}