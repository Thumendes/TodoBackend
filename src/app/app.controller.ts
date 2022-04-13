import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  welcome() {
    return {
      message: 'Welcome to the Todo API!',
    };
  }
}
