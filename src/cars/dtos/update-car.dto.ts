
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';


export class UpdateCarDto {
  @IsString()
  @IsUUID()
  readonly id:string;


  @IsString({
    message: `El brand debe ser una cadena`,
  })
  @IsOptional()
  readonly brand?: string;



  @IsString({
    message: `El model debe ser una cadena`,
  })
  @MinLength(3,{
    message: `el modelo debe tener una longitud igual o superior a 3 caracteres`,
  })
  @IsOptional() 
  readonly model?: string;
}
