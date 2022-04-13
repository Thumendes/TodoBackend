import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async create(data: any) {
    return await this.db.user.create({ data: { username: data.username } });
  }

  async findAll() {
    return await this.db.user.findMany();
  }

  async findOne(id: string) {
    return await this.db.user.findFirst({ where: { id } });
  }

  async update(id: string, data: any) {
    return await this.db.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.db.user.delete({ where: { id } });
  }
}
