import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ViajeDTO } from './dto/viaje.dto';
import { ViajesService } from './viaje.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Viajes')
@Controller('api/v2/viajes')
export class ViajesController {
  constructor(private viajesService: ViajesService) {}

  @Post()
  insertar(@Body() viajeDTO: ViajeDTO) {
    return this.viajesService.insertar(viajeDTO);
  }

  @Get()
  todos() {
    return this.viajesService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.viajesService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() viajeDTO: ViajeDTO) {
    return this.viajesService.actualizar(id, viajeDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.viajesService.eliminar(id);
  }
}
