import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardEntity } from './entities/board.entity';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('board')
@UseGuards(JwtGuard)
@ApiBearerAuth()
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  @ApiOkResponse({ type: BoardEntity, isArray: true })
  findAll() {
    return this.boardService.findAll();
  }

  @Post()
  @ApiCreatedResponse({ type: BoardEntity })
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: BoardEntity })
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BoardEntity })
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(id, updateBoardDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BoardEntity })
  remove(@Param('id') id: string) {
    return this.boardService.remove(id);
  }
}
