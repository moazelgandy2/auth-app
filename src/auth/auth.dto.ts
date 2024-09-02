import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
export class SignInDTO {
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
