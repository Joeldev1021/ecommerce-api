import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { UserModel } from '../models/user.model';
import { EmailVO } from '../value-objects/email.vo';

export interface IUserRepository {
	findByEmail(email: EmailVO): Promise<UserModel | null>;

	findById(id: UuidVO): Promise<UserModel | null>;

	register(user: UserModel): Promise<void>;

	login(user: UserModel): Promise<void>;
}
