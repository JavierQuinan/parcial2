import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GuiaDTO } from 'src/guias/dto/guias.dto';
import { DestinoDTO } from 'src/destino/dto/destino.dto';
import { ViajeDTO } from 'src/viaje/dto/viaje.dto';
import { TuristaDTO } from 'src/turista/dto/turista.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async signUpTurista(turistaDTO: TuristaDTO) {
    return { message: 'Turista registrado exitosamente' };
  }

  async signUpViaje(viajeDTO: ViajeDTO) {
    return { message: 'Viaje registrado exitosamente' };
  }

  async signUpDestino(destinoDTO: DestinoDTO) {
    return { message: 'Destino registrado exitosamente' };
  }

  async signUpGuia(guiaDTO: GuiaDTO) {
    return { message: 'Guía registrado exitosamente' };
  }
}
