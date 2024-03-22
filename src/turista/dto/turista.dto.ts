import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class TuristaDTO {
  @IsNotEmpty({ message: 'El ID del turista es requerido' })
  @IsNumber({}, { message: 'El ID del turista debe ser un número' })
  readonly ID_Turista: number;

  @IsNotEmpty({ message: 'El nombre del turista es requerido' })
  @IsString({ message: 'El nombre del turista debe ser una cadena de texto' })
  readonly Nombre: string;

  @IsNotEmpty({ message: 'El ID del viaje es requerido' })
  @IsNumber({}, { message: 'El ID del viaje debe ser un número' })
  readonly ID_Viaje: number;
}