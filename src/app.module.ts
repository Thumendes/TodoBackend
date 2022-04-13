import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
