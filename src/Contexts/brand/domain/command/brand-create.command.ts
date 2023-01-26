import { Command } from "../../../shared/domain/command";

export class BrandCreateCommand extends Command {
  constructor(
    public readonly brandId: string,
    public name: string,
    public description: string,
    public logo: string,
    public slug: string,
    public state: boolean

  ) {
    super();
  }
}
