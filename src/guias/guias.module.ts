import { Module } from '@nestjs/common';
import { GuiaController } from './guias.controller';
import { GuiasService } from './guias.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GUIA } from 'src/models/models'; // Asumiendo que GUIA es el nombre del modelo
import { GuiaSchema } from './schema/guias.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GUIA.name, schema: GuiaSchema }, // Usar el nombre del modelo y el schema correspondiente
    ]),
  ],
  controllers: [GuiaController],
  providers: [GuiasService],
  exports: [GuiasService], // Exportar el servicio si es necesario para otros módulos
})
export class GuiasModule {}
