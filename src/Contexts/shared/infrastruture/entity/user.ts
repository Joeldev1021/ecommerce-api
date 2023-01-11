import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryColumn({ type: 'uuid' })
	user_id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@Column({ nullable: true })
	avatar: string;

	@Column({ default: true })
	state: boolean;
}
/* export const User = new EntitySchema({
	name: 'User',
	tableName: 'users',
	columns: {
		id: {
			primary: true,
			type: 'varchar',
		},
		name: {
			type: 'varchar',
			unique: true,
		},
		email: {
			type: 'varchar',
			unique: true,
		},
		password: {
			type: 'varchar',
			unique: true,
		},
		avatar: {
			type: 'varchar',
			nullable: true,
		},
		state: {
			type: 'boolean',
			default: true,
		},
	},
}); */
