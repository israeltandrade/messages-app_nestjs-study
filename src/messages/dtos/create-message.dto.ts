import { IsString } from 'class-validator';
// O pacote class-validator fornece decorator (como o @IsString) para averiguar
// diversos parâmetros nos dados (como por exemplo, tipagem).


export class CreateMessageDto {
  @IsString()
  content: string;
}