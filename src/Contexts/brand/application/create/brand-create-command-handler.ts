import { inject, injectable } from "inversify";
import { CONTAINER_TYPES } from "../../../../apps/mooc/backend/dependency-injection/container.types";
import { Command } from "../../../shared/domain/command";
import { ICommandHandler } from "../../../shared/domain/interface/command-handler";
import { BrandCreateCommand } from "../../domain/command/brand-create.command";
import { BrandDescription } from "../../domain/value-objects/brand-description.vo";
import { BrandId } from "../../domain/value-objects/brand-id.vo";
import { BrandName } from "../../domain/value-objects/brand-name.vo";
import { BrandState } from "../../domain/value-objects/brand-state.vo";
import { BrandCreateUseCase } from "./brand-create.usecase";

@injectable()
export class BrandCreateCommandHandler
  implements ICommandHandler<BrandCreateCommand>
{
  constructor(
    @inject(CONTAINER_TYPES.brandCreateUseCase)
    private _brandCreateUseCase: BrandCreateUseCase
  ) { }

  subscribeTo(): Command {
    return BrandCreateCommand;
  }


  async handle(command: BrandCreateCommand): Promise<void> {
    await this._brandCreateUseCase.execute(
      new BrandId(command.brandId),
      new BrandName(command.name),
      new BrandDescription(command.description),
      null,
      '',
      new BrandState(command.state)
    );
  }
}
