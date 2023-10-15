import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID(4)
  @ApiProperty({
    description: 'The id of the user who owns the board',
    format: 'uuid',
  })
  ownerId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the board',
    format: 'string',
  })
  title: string;
}
