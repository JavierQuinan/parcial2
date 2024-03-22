import { Injectable, HttpStatus } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GuiaDTO } from './dto/guias.dto';
import { Guia } from './guias.interface';
import { GUIA } from 'src/models/models';

@Injectable()
export class GuiasService {
  constructor(@InjectModel(GUIA.name) private readonly modelo: Model<Guia>) {} // Usar el nombre del modelo

  async insertar(guiaDTO: GuiaDTO): Promise<Guia> {
    const nuevaGuia = new this.modelo(guiaDTO);
    return await nuevaGuia.save();
  }

  async todos(): Promise<Guia[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<Guia> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, guiaDTO: GuiaDTO): Promise<Guia> {
    return await this.modelo.findByIdAndUpdate(id, guiaDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Guía eliminado' };
  }
}
