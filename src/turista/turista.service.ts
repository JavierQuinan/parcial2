// turistas.service.ts
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TuristaDTO } from './dto/turista.dto';
import { Turista } from './turista.interface';

@Injectable()
export class TuristasService {
  constructor(@InjectModel('turista') private readonly modelo: Model<Turista>) {}

  async insertar(turistaDTO: TuristaDTO): Promise<Turista> {
    const nuevoTurista = new this.modelo(turistaDTO);
    return await nuevoTurista.save();
  }

  async todos(): Promise<Turista[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<Turista> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, turistaDTO: TuristaDTO): Promise<Turista> {
    return await this.modelo.findByIdAndUpdate(id, turistaDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Turista eliminado' };
  }
}
