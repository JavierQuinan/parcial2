
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ViajeDTO } from './dto/viaje.dto';
//import * as bcrypt from 'bcrypt';
import { Viaje } from './viaje.interface';

@Injectable()
export class ViajesService {
  constructor(@InjectModel('viaje') private readonly modelo: Model<Viaje>) {}

  async insertar(viajeDTO: ViajeDTO): Promise<Viaje> {
    const nuevoViaje = new this.modelo(viajeDTO);
    return await nuevoViaje.save();
  }

  async todos(): Promise<Viaje[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<Viaje> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, viajeDTO: ViajeDTO): Promise<Viaje> {
    return await this.modelo.findByIdAndUpdate(id, viajeDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Viaje eliminado' };
  }
}
