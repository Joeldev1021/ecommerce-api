import { InfrastrutureFormatException } from "./infrastruture-format.exception";

export class NotFoundException extends InfrastrutureFormatException {
    constructor() {
        super("error not found")
    }
}