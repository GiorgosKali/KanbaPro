import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { BoardService } from 'src/board/board.service';

@Module({
  controllers: [UserController],
  providers: [UserService, BoardService],
})
export class UserModule {}
