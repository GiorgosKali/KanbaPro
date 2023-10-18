import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  getOne(id: string) {
    const user = {
      id,
      email: '',
      name: '',
    };
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        boards: true,
      },
    });
  }

  getAll() {
    return this.prisma.user.findMany({
      include: {
        boards: {
          include: {
            lists: {
              include: {
                cards: true,
              },
            },
          },
        },
      },
    });
  }

  create(createUserDto: CreateUserDto): any {
    const { email, username, password, name } = createUserDto;

    const user = this.prisma.user.create({
      data: {
        username,
        email,
        name,
        password,
      },
    });
    return user;
  }

  findOneWithUsername(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }
}
