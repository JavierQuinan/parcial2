import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      // Importa aquí los esquemas necesarios
    ]),
  ],
  controllers: [RelacionesController],
  providers: [RelacionesService],
})
export class RelacionModule {}
