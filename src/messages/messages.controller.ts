import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// O decorator "Controller" é um decorator de classe.
@Controller('messages')
export class MessagesController {
  // Rota para listar todas as mensagens:
  // Aqui temos decorators de método:
  @Get()
  listMessages() {}

  // Rota para listar criar uma mensagem:
  // Decorators de argumento entram nos parâmetros da função.
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
  // Rota para visualizar uma mensagem em particular:
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
