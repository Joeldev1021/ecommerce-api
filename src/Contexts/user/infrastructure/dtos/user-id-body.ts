import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserIdDTO {
	@IsString()
	public userId: string;
}
