import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viaje, Destino, Guia, Turista } from './relacion.interface';
import { DestinoDTO, GuiaDTO, TuristaDTO, ViajeDTO } from './dto/relacion.dto';

@Injectable()
export class RelacionService {
  constructor(
    @InjectModel('Viaje') private readonly viajeModel: Model<Viaje>,
    @InjectModel('Destino') private readonly destinoModel: Model<Destino>,
    @InjectModel('Guia') private readonly guiaModel: Model<Guia>,
    @InjectModel('Turista') private readonly turistaModel: Model<Turista>,
  ) {}

  async crearViaje(viajeDTO: ViajeDTO): Promise<Viaje> {
    const nuevoViaje = new this.viajeModel(viajeDTO);
    return await nuevoViaje.save();
  }

  async crearDestino(destinoDTO: DestinoDTO): Promise<Destino> {
    const nuevoDestino = new this.destinoModel(destinoDTO);
    return await nuevoDestino.save();
  }

  async crearGuia(guiaDTO: GuiaDTO): Promise<Guia> {
    const nuevoGuia = new this.guiaModel(guiaDTO);
    return await nuevoGuia.save();
  }

  async crearTurista(turistaDTO: TuristaDTO): Promise<Turista> {
    const nuevoTurista = new this.turistaModel(turistaDTO);
    return await nuevoTurista.save();
  }

  async obtenerTodosViajes(): Promise<Viaje[]> {
    return await this.viajeModel.find();
  }

  async obtenerTodosDestinos(): Promise<Destino[]> {
    return await this.destinoModel.find();
  }

  async obtenerTodosGuias(): Promise<Guia[]> {
    return await this.guiaModel.find();
  }

  async obtenerTodosTuristas(): Promise<Turista[]> {
    return await this.turistaModel.find();
  }
}
