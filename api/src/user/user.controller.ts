import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { BoardService } from 'src/board/board.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly boardService: BoardService,
  ) {}

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.userService.getOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id/boards')
  getUserBoards(@Param('id') id: string) {
    return this.boardService.getUserBoards(id);
  }
}
