import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly db: PrismaService) {}

  async create(data: any) {
    return await this.db.todo.create({
      data: { text: data.text, userId: data.user },
    });
  }

  async findAll() {
    return await this.db.todo.findMany();
  }

  async toggle(id: number) {
    const todo = await this.db.todo.findFirst({ where: { id } });

    return await this.db.todo.update({
      where: { id },
      data: { completed: !todo.completed },
    });
  }
}
