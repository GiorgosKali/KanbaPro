import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

  // create(createBoardDto: CreateBoardDto) {
  //   return this.prisma.board.create({
  //     data: {
  //       title: createBoardDto.title,
  //       owner: {
  //         connect: {
  //           id: createBoardDto.ownerId,
  //         },
  //       }
  //     },
  //   });
  // }

  findAll() {
    return this.prisma.board.findMany({
      include: {
        lists: {
          include: {
            cards: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.board.findUnique({
      where: {
        id: id,
      },
      include: {
        lists: {
          include: {
            cards: true,
          },
        },
      },
    });
  }

  update(id: string, updateBoardDto: UpdateBoardDto) {
    return this.prisma.board.update({
      where: {
        id: id,
      },
      data: {
        title: updateBoardDto.title,
      },
    });
  }

  remove(id: string) {
    return this.prisma.board.delete({
      where: {
        id: id,
      },
    });
  }

  getUserBoards(userId: string) {
    return this.prisma.board.findMany({
      where: {
        ownerId: userId,
      },
      include: {
        lists: {
          include: {
            cards: true,
          },
        },
      },
    });
  }

  createUserBoard(userId: string, createBoardDto: CreateBoardDto) {
    return this.prisma.board.create({
      data: {
        title: createBoardDto.title,
        owner: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  updateUserBoard(
    userId: string,
    boardId: string,
    updateBoardDto: UpdateBoardDto,
  ) {
    return this.prisma.board.update({
      where: {
        id: boardId,
        ownerId: userId,
      },
      data: {
        title: updateBoardDto.title,
      },
    });
  }

  findOneUserBoard(userId: string, boardId: string) {
    return this.prisma.board.findUnique({
      where: {
        id: boardId,
        ownerId: userId,
      },
      include: {
        lists: {
          include: {
            cards: true,
          },
        },
      },
    });
  }

  deleteUserBoard(userId: string, boardId: string) {
    return this.prisma.board.delete({
      where: {
        id: boardId,
        ownerId: userId,
      },
    });
  }
}
