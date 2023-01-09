import { UserModel } from '../../domain/models/user.model';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { injectable } from 'inversify';
import { User } from '../../../shared/infrastruture/models/user';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';

@injectable()
export class UserRepository implements IUserRepository {
	/**
	 * "Find a user by email."
	 *
	 * The function is async, so it returns a promise
	 * @param {EmailVO} email - EmailVO - This is the email address that we want to find in the database.
	 * @returns A promise that resolves to a User object.
	 */

	async findByEmail(email: EmailVO): Promise<UserModel | null> {
		const user = await User.findOne({ where: { email: email.value } });
		if (user == null) return null;
		return UserModel.toDomain(user);
	}

	/**
	 * "Find a user by their id."
	 *
	 * The first line of the function is a comment. It's a good idea to add comments to your functions
	 * @param {UuidVO} id - UuidVO
	 * @returns A promise that resolves to a User instance.
	 */
	async findById(id: UuidVO): Promise<UserModel | null> {
		const user = await User.findByPk(id.value);
		if (user == null) return null;
		return UserModel.toDomain(user);
	}

	/**
	 * It takes a user object, converts it to a user persistence object, and then creates a new user
	 * persistence object in the database
	 * @param {UserModel} user - UserModel - this is the user object that we are passing in from the
	 * controller.
	 * @returns The userPersistance object is being returned.
	 */
	async register(user: UserModel): Promise<void> {
		await User.create(user.toPrimitives());
	}

	async login(user: UserModel): Promise<void> {}
}
