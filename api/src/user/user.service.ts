import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  getOne(id: string): any {
    const user = {
      id,
      email: '',
      name: '',
    };
    return user;
  }

  create(createUserDto: CreateUserDto): any {
    const { email, password, name } = createUserDto;

    const user = {
      id: 'newId',
      email,
      name,
    };
    return user;
  }
}
