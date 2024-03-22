import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

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
  readonly Fecha: Date;
}

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

export class GuiaDTO {
  @IsNotEmpty({ message: 'El ID del guía es requerido' })
  @IsNumber({}, { message: 'El ID del guía debe ser un número' })
  readonly ID_Guia: number;

  @IsNotEmpty({ message: 'El nombre del guía es requerido' })
  @IsString({ message: 'El nombre del guía debe ser una cadena de texto' })
  readonly Nombre: string;
}

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
