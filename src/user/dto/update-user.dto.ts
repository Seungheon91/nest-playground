import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
