import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [UserModule, BoardModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
