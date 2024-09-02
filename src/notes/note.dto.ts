import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class NoteDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  title: string;

  @IsString()
  description: string;

  @IsString()
  createdBy: string;
}
