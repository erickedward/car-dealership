import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({
    message: `El brand debe ser una cadena`,
  })
  readonly brand: string;
  @IsString({
    message: `El model debe ser una cadena`,
  })
  @MinLength(3,{
    message: `el modelo debe tener una longitud igual o superior a 3 caracteres`,
  })

  
  readonly model: string;
}
