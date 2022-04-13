import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() data: any) {
    return await this.todoService.create(data);
  }

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Put(':id/toggle')
  async findOne(@Param('id') id: number) {
    return await this.todoService.toggle(Number(id));
  }
}
