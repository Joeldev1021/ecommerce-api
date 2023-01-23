import { IResponse } from '../../../shared/domain/interface/response';

export class UserLoginReponse implements IResponse {
	constructor(readonly token: string | null) {}
}
