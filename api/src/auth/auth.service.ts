import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(credentials: LoginDto) {
    const user = await this.userService.findOneWithUsername(
      credentials.username,
    );
    if (user && user.password === credentials.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(credentials: LoginDto) {
    const user = await this.userService.findOneWithUsername(
      credentials.username,
    );
    const payload = {
      username: user.username,
      sub: {
        id: user.id,
      },
    };
    return {
      ...credentials,
      token: this.jwtService.sign(payload),
    };
  }
}
