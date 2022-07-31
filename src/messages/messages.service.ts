import { ShutdownSignal } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

export class MessagesService {
messagesRepo: MessagesRepository;

  constructor() {
    // A Service está criando as suas próprias dependências.
    // Não fazer isso em APPs reais!
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  indAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}