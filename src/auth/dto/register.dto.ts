/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @Transform(({ value })=> value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
