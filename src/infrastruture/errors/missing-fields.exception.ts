import { InfrastrutureFormatException } from "./infrastruture-format.exception";

export class MissingFieldsException extends InfrastrutureFormatException {
    constructor() {
        super('missing required fields')
    }
}