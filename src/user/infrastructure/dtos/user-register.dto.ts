import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserRegisterDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;

  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
