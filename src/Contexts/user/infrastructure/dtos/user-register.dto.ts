import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRegisterDTO {
	@IsString()
	@IsNotEmpty()
	public id: string;

	@IsString()
	@IsNotEmpty()
	public username: string;

	@IsEmail()
	@IsNotEmpty()
	public email: string;

	@IsString()
	@IsNotEmpty()
	public password: string;

	@IsString()
	public role?: string;
}
