import { Column, Entity, PrimaryColumn } from 'typeorm';

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

	@Column({ nullable: true })
	avatar: string;

	@Column({ default: true })
	state: boolean;
}
