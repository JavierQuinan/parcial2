import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GuiaDTO {
  @IsNotEmpty({ message: 'El ID del guía es requerido' })
  @IsNumber({}, { message: 'El ID del guía debe ser un número' })
  readonly ID_Guia: number;

  @IsNotEmpty({ message: 'El nombre del guía es requerido' })
  @IsString({ message: 'El nombre del guía debe ser una cadena de texto' })
  readonly Nombre: string;
}