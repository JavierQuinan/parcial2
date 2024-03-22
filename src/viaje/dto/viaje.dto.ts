import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class ViajeDTO {
  @IsNotEmpty({ message: 'El ID del viaje es requerido' })
  @IsNumber({}, { message: 'El ID del viaje debe ser un número' })
  readonly ID_Viaje: number;

  @IsNotEmpty({ message: 'El ID del destino es requerido' })
  @IsNumber({}, { message: 'El ID del destino debe ser un número' })
  readonly ID_Destino: number;

  @IsNotEmpty({ message: 'El ID del guía es requerido' })
  @IsNumber({}, { message: 'El ID del guía debe ser un número' })
  readonly ID_Guia: number;

  @IsNotEmpty({ message: 'La fecha del viaje es requerida' })
  @IsDate({ message: 'La fecha del viaje debe ser una fecha válida' })
  readonly Fecha: Date;
}

