import { Board as BoardInterface, User as UserIntrface } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BoardEntity implements BoardInterface {
  @ApiProperty({
    description: 'The id of the board',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'The title of the board',
    format: 'string',
  })
  title: string;

  @ApiProperty({
    description: 'The id of the user who owns the board',
    format: 'uuid',
  })
  ownerId: string;

  @ApiProperty({
    description: 'The user who owns the board',
  })
  owner: UserIntrface;

  @ApiProperty({
    description: 'The date the board was created',
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date the board was updated',
    format: 'date-time',
  })
  updatedAt: Date;
}
