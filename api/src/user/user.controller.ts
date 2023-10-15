import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { BoardService } from 'src/board/board.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { BoardEntity } from 'src/board/entities/board.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly boardService: BoardService,
  ) {}

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  getOne(@Param('id') id: string) {
    return this.userService.getOne(id);
  }
  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id/boards')
  @ApiOkResponse({ type: BoardEntity, isArray: true })
  getUserBoards(@Param('id') id: string) {
    return this.boardService.getUserBoards(id);
  }
}
