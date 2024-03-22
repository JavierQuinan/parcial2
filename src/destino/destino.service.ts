// destinos.service.ts
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DestinoDTO } from './dto/destino.dto';
import { Destino } from './destino.interface';

@Injectable()
export class DestinosService {
  constructor(@InjectModel('destino') private readonly modelo: Model<Destino>) {}

  async insertar(destinoDTO: DestinoDTO): Promise<Destino> {
    const nuevoDestino = new this.modelo(destinoDTO);
    return await nuevoDestino.save();
  }

  async todos(): Promise<Destino[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<Destino> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, destinoDTO: DestinoDTO): Promise<Destino> {
    return await this.modelo.findByIdAndUpdate(id, destinoDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Destino eliminado' };
  }
}

