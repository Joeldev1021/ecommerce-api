import { DomainFormatException } from "./domain-format.exception";

export class VOFormatException extends DomainFormatException {
    constructor(valueObjectName: string, value: any) {
        super(`${valueObjectName}: invalid value ${value} `)
    }
}