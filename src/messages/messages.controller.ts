import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  // Rota para listar todas as mensagens:
  @Get()
  listMessages() {}

  // Rota para listar criar uma mensagem:
  @Post()
  createMessage() {}
  // Rota para visualizar uma mensagem em particular:
  @Get('/id')
  getMessage() {}
}
