import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { ViajeDTO } from 'src/viaje/dto/viaje.dto';
import { DestinoDTO } from 'src/destino/dto/destino.dto';
import { GuiaDTO } from 'src/guias/dto/guias.dto';
import { TuristaDTO } from 'src/turista/dto/turista.dto';

@ApiTags('Autenticación')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async signIn(@Req() req) {
    return { req };
  }

  @Post('signUpViaje')
  async signUpViaje(@Body() viajeDTO: ViajeDTO) {
    return this.authService.signUpViaje(viajeDTO); // Implementa el método signUpViaje en AuthService
  }

  @Post('signUpDestino')
  async signUpDestino(@Body() destinoDTO: DestinoDTO) {
    return this.authService.signUpDestino(destinoDTO); // Implementa el método signUpDestino en AuthService
  }

  @Post('signUpGuia')
  async signUpGuia(@Body() guiaDTO: GuiaDTO) {
    return  this.authService.signUpGuia(guiaDTO); // Implementa el método signUpGuia en AuthService
  }

  @Post('signUpTurista')
async signUpTurista(@Body() turistaDTO: TuristaDTO) {
  return await this.authService.signUpTurista(turistaDTO); // Corregido para llamar al método signUpTurista
}
}

