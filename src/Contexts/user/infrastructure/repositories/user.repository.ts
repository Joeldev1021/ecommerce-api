import { UserModel } from '../../domain/models/user.model';
import { UserInterface } from '../types/user.interface';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { PasswordVO } from '../../domain/value-objects/password.vo';
import { injectable } from 'tsyringe';
import { UuidVO } from '@shared/domain/value-objects/uuid.vo';
import { NameVO } from '@shared/domain/value-objects/name.vo';
import { StateVO } from '@shared/domain/value-objects/state.vo';
import { User } from '@shared/infrastruture/models/user';

@injectable()
export class UserRepository implements IUserRepository {
	/**
	 * It takes a UserModel object and returns a UserInterface object
	 * @param {UserModel} userDomain - UserModel
	 * @returns An object with the same properties as the UserModel, but with the values of the
	 * properties.
	 */
	toPersistance(userDomain: UserModel): UserInterface {
		const { id, name, email, password, state } = userDomain;
		return {
			user_id: id.value,
			name: name.value,
			email: email.value,
			password: password.value,
			state: state.value,
		};
	}

	/**
	 * It takes a UserInterface object and returns a UserModel object
	 * @param {UserInterface} userPersistance - UserInterface
	 * @returns A UserModel object
	 */
	toDomain(userPersistance: UserInterface): UserModel {
		return {
			id: new UuidVO(userPersistance.user_id),
			name: new NameVO(userPersistance.name),
			email: new EmailVO(userPersistance.email),
			password: new PasswordVO(userPersistance.password),
			state: new StateVO(userPersistance.state),
		};
	}

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
		return this.toDomain(user);
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
		return this.toDomain(user);
	}

	/**
	 * It takes a user object, converts it to a user persistence object, and then creates a new user
	 * persistence object in the database
	 * @param {UserModel} user - UserModel - this is the user object that we are passing in from the
	 * controller.
	 * @returns The userPersistance object is being returned.
	 */
	async create(user: UserModel): Promise<UserModel | null> {
		const newUser = await User.create(this.toPersistance(user));
		if (!newUser) return null;
		return this.toDomain(newUser);
	}
}
