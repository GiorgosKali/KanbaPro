import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the board',
    format: 'string',
  })
  title: string;
}
