import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
