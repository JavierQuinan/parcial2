import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { DestinoDTO } from './dto/destino.dto';
import { DestinosService } from './destino.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Destinos')
@Controller('api/v2/destinos')
export class DestinoController {
  constructor(private destinoService: DestinosService) {}

  @Post()
  insertar(@Body() destinoDTO: DestinoDTO) {
    return this.destinoService.insertar(destinoDTO);
  }

  @Get()
  todos() {
    return this.destinoService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.destinoService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() destinoDTO: DestinoDTO) {
    return this.destinoService.actualizar(id, destinoDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.destinoService.eliminar(id);
  }
}