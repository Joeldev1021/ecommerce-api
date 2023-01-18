import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ROLES_USER } from '../utils/roles';

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryColumn({ type: 'uuid' })
	userId: string;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ type: 'enum', enum: ROLES_USER, default: ROLES_USER.USER })
	role: ROLES_USER;

	@Column({ nullable: true })
	avatar: string;

	@Column({ default: true })
	state: boolean;
}
