import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  // Passagem do objeto DTO como parâmetro de createMessage
  // para ser usado como critério da pipe.
  // O pacote class-transformer pega um objeto simples ou literal (referindo a
  // classe Object do Javascript) e transforma em uma classe com construtor,
  // propriedades e métodos próprios. (chamado tb de objetos de classe).
  // A seguir, o corpo é transformado em uma instância da classe DTO:
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
