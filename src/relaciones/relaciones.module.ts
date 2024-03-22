import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VIAJE, DESTINO, GUIA, TURISTA } from 'src/models/models';
import { DestinoSchema, GuiaSchema, TuristaSchema, ViajeSchema } from './schema/relacion.schema';
import { RelacionController } from './relaciones.controller';
import { RelacionService } from './relaciones.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: VIAJE.name,
        useFactory: () => {
          return ViajeSchema;
        },
      },
      {
        name: DESTINO.name,
        useFactory: () => {
          return DestinoSchema;
        },
      },
      {
        name: GUIA.name,
        useFactory: () => {
          return GuiaSchema;
        },
      },
      {
        name: TURISTA.name,
        useFactory: () => {
          return TuristaSchema;
        },
      },
    ]),
  ],
  controllers: [RelacionController],
  providers: [RelacionService],
})
export class RelacionModule {}
