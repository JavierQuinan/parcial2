// viajes.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VIAJE } from 'src/models/models';
import { ViajeSchema } from './schema/viaje.schema';
import { ViajesController } from './viaje.controller';
import { ViajesService } from './viaje.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: VIAJE.name,
        useFactory: () => {
          return ViajeSchema;
        },
      },
    ]),
  ],
  controllers: [ViajesController],
  providers: [ViajesService],
  exports: [ViajesService],
})
export class ViajesModule {}
