// destinos.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DESTINO } from 'src/models/models';
import { DestinoSchema } from './schema/destino.schema';
import { DestinoController } from './destino.controller';
import { DestinosService } from './destino.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DESTINO.name,
        useFactory: () => {
          return DestinoSchema;
        },
      },
    ]),
  ],
  controllers: [DestinoController],
  providers: [DestinosService],
  exports: [DestinosService],
})
export class DestinosModule {}
