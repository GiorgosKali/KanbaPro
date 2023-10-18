import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Request,
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
  findAll(@Request() req) {
    return this.boardService.getUserBoards(req.user.sub.id);
  }

  @Post()
  @ApiCreatedResponse({ type: BoardEntity })
  create(@Request() req, @Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createUserBoard(req.user.sub.id, createBoardDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: BoardEntity })
  findOne(@Request() req, @Param('id') id: string) {
    return this.boardService.findOneUserBoard(req.user.sub.id, id);
  }

  @Put(':id')
  @ApiOkResponse({ type: BoardEntity })
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardService.updateUserBoard(
      req.user.sub.id,
      id,
      updateBoardDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: BoardEntity })
  remove(@Request() req, @Param('id') id: string) {
    return this.boardService.deleteUserBoard(req.user.sub.id, id);
  }
}
