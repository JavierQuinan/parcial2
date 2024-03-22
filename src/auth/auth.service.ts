import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

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
