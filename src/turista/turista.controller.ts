import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { TuristaDTO } from './dto/turista.dto';
import { ApiTags } from '@nestjs/swagger';
import { TuristasService } from './turista.service';

@ApiTags('Turistas')
@Controller('api/v2/turistas')
export class TuristaController {
  constructor(private turistaService: TuristasService) {}

  @Post()
  insertar(@Body() turistaDTO: TuristaDTO) {
    return this.turistaService.insertar(turistaDTO);
  }

  @Get()
  todos() {
    return this.turistaService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.turistaService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() turistaDTO: TuristaDTO) {
    return this.turistaService.actualizar(id, turistaDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.turistaService.eliminar(id);
  }
}