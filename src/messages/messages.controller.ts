import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  // Maneira completa de escrever:
  // messagesService: MessagesService;

  // constructor(messagesService: MessagesService) {
  //   this.messagesService = messagesService;
  // }
  // Maneira resumida (dispensa declaração):
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content)
  }
  @Get('/:id')
  // Expecificando o método getMessage como assíncrono e transformando
  // o retorno numa passagem para uma constante, podemos utilizar o esquema
  // de promise (com await) e assim passar Exception Errors, como o
  // NotFoundException a seguir e depois disso retornar o valor.
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
