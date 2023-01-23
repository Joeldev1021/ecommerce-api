import { UserLoginReponse } from './../../../../../Contexts/user/application/login/user-login.response';
import { UserLoginQuery } from './../../../../../Contexts/user/application/login/user-login.query';
import { IQueryBus } from './../../../../../Contexts/shared/domain/interface/query-bus';
import { UserLoginCommand } from './../../../../../Contexts/user/domain/command/user-login.command';
import { ICommandBus } from './../../../../../Contexts/shared/domain/interface/command-bust';
import { inject, injectable } from 'inversify';
import { NextFunction, Request, Response } from 'express';
import { CONTAINER_TYPES } from '../../dependency-injection/container.types';
import { UserLoginDTO } from '../../../../../Contexts/user/infrastructure/dtos/user-login.dto';

@injectable()
export class UserLoginController {
	constructor(
		@inject(CONTAINER_TYPES.queryBus)
		private readonly _queryBus: IQueryBus
	) {}

	async execute(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const user: UserLoginDTO = req.body;
		try {
			const query = new UserLoginQuery(user.email, user.password);

			const token = await this._queryBus.ask<UserLoginReponse>(query);

			res.status(200).send(token);
		} catch (error) {
			next(error);
		}
	}
}
