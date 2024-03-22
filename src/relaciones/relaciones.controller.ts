import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RelacionService } from './relaciones.service';
import { DestinoDTO, GuiaDTO, TuristaDTO, ViajeDTO } from './dto/relacion.dto';

@ApiTags('Relacion')
@Controller('api/relaciones')
export class RelacionController {
  constructor(private relacionService: RelacionService) {}

  @Post('viajes')
  async crearViaje(@Body() viajeDTO: ViajeDTO) {
    return await this.relacionService.crearViaje(viajeDTO);
  }

  @Post('destinos')
  async crearDestino(@Body() destinoDTO: DestinoDTO) {
    return await this.relacionService.crearDestino(destinoDTO);
  }

  @Post('guias')
  async crearGuia(@Body() guiaDTO: GuiaDTO) {
    return await this.relacionService.crearGuia(guiaDTO);
  }

  @Post('turistas')
  async crearTurista(@Body() turistaDTO: TuristaDTO) {
    return await this.relacionService.crearTurista(turistaDTO);
  }

  @Get('viajes')
  async obtenerTodosViajes() {
    return await this.relacionService.obtenerTodosViajes();
  }

  @Get('destinos')
  async obtenerTodosDestinos() {
    return await this.relacionService.obtenerTodosDestinos();
  }

  @Get('guias')
  async obtenerTodosGuias() {
    return await this.relacionService.obtenerTodosGuias();
  }

  @Get('turistas')
  async obtenerTodosTuristas() {
    return await this.relacionService.obtenerTodosTuristas();
  }
}
