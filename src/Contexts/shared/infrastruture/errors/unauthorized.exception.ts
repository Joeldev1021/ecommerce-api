import { InfrastrutureFormatException } from "./infrastruture-format.exception";

export class UnauthorizedException extends InfrastrutureFormatException {
    constructor() {
        super("not authorized")
    }
}