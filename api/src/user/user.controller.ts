import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { BoardService } from 'src/board/board.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { BoardEntity } from 'src/board/entities/board.entity';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly boardService: BoardService,
  ) {}

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @ApiOkResponse({ type: UserEntity })
  getOne(@Param('id') id: string) {
    return this.userService.getOne(id);
  }

  @Get(':id/boards')
  @UseGuards(JwtGuard)
  @ApiOkResponse({ type: BoardEntity, isArray: true })
  getUserBoards(@Param('id') id: string) {
    return this.boardService.getUserBoards(id);
  }
}
