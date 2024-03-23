import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TURISTA } from 'src/models/models';
import { TuristaSchema } from './schema/turista.schema';
import { TuristaController } from './turista.controller';
import { TuristasService } from './turista.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TURISTA.name,
        useFactory: () => {
          return TuristaSchema;
        },
      },
    ]),
  ],
  controllers: [TuristaController],
  providers: [TuristasService],
  exports: [TuristasService],
})
export class TuristasModule {}
