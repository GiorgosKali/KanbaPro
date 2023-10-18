import { User as UserInterface } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { BoardEntity } from 'src/board/entities/board.entity';

export class UserEntity implements UserInterface {
  @ApiProperty({
    description: 'The id of the user',
    format: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'The email of the user',
    format: 'string',
  })
  email: string;

  @ApiProperty({
    description: 'The username of the user',
    format: 'string',
  })
  username: string;

  @ApiProperty({
    description: 'The name of the user',
    format: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'The date the user was created',
    format: 'date-time',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date the user was updated',
    format: 'date-time',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The password of the user',
    format: 'string',
  })
  password: string;

  @ApiProperty({
    description: 'The boards of the user',
    format: 'array',
    type: [BoardEntity],
  })
  boards: BoardEntity[];
}
