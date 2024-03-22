import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class DestinoDTO {
  @IsNotEmpty({ message: 'El ID del destino es requerido' })
  @IsNumber({}, { message: 'El ID del destino debe ser un número' })
  readonly ID_Destino: number;

  @IsNotEmpty({ message: 'El nombre del destino es requerido' })
  @IsString({ message: 'El nombre del destino debe ser una cadena de texto' })
  readonly Nombre: string;

  @IsNotEmpty({ message: 'El país del destino es requerido' })
  @IsString({ message: 'El país del destino debe ser una cadena de texto' })
  readonly Pais: string;
}