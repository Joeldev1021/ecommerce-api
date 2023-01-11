import { IUserPrimitives, UserModel } from '../../domain/models/user.model';
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { injectable } from 'inversify';
import { UuidVO } from '../../../shared/domain/value-objects/uuid.vo';
import { UserEntity } from '../../../shared/infrastruture/entity/user';
import { ObjectType } from 'typeorm';
import { TypeOrmRepository } from '../../../shared/infrastruture/persistance/typeorm-repository';

@injectable()
export class UserRepository
	extends TypeOrmRepository<UserModel, IUserPrimitives>
	implements IUserRepository
{
	entitySchema(): ObjectType<UserModel> {
		return UserEntity;
	}
	/**
	 * "Find a user by email."
	 *
	 * The function is async, so it returns a promise
	 * @param {EmailVO} email - EmailVO - This is the email address that we want to find in the database.
	 * @returns A promise that resolves to a User object.
	 */

	async findByEmail(email: EmailVO): Promise<UserModel | null> {
		const repository = await this.repository();
		const user = await repository.findOneBy({ email: email.value });

		if (!user) return null;
		return UserModel.toDomain(user);
		/* 	const user = await this.repository.findOneBy({ email: email.value });
		if (user == null) return null;
		return UserModel.toDomain(user); */
	}

	/**
	 * "Find a user by their id."
	 *
	 * The first line of the function is a comment. It's a good idea to add comments to your functions
	 * @param {UuidVO} id - UuidVO
	 * @returns A promise that resolves to a User instance.
	 */
	async findById(id: UuidVO): Promise<UserModel | null> {
		const repository = await this.repository();
		const user = await repository.findOneBy({ user_id: id.value });
		if (!user) return null;

		return UserModel.toDomain(user);

		/* const user = await this.repository.findOneBy({ user_id: id.value });

		if (user == null) return null;
		return UserModel.toDomain(user); */
	}

	/**
	 * It takes a user object, converts it to a user persistence object, and then creates a new user
	 * persistence object in the database
	 * @param {UserModel} user - UserModel - this is the user object that we are passing in from the
	 * controller.
	 * @returns The userPersistance object is being returned.
	 */
	async register(user: UserModel): Promise<void> {
		const repository = await this.repository();
		const userCreate = new UserEntity();
		userCreate.user_id = user.id.value;
		userCreate.name = user.name.value;
		userCreate.email = user.email.value;
		userCreate.password = user.password.value;
		userCreate.state = user.state.value;
		const save = await repository.save(userCreate);
		console.log(save);
	}

	async login(user: UserModel): Promise<void> {}
}
