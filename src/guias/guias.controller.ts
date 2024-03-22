import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GuiaDTO } from './dto/guias.dto';
import { GuiasService } from './guias.service';

@ApiTags('Guias')
@Controller('api/v2/guias')
export class GuiaController {
  constructor(private guiaService: GuiasService) {}

  @Post()
  insertar(@Body() guiaDTO: GuiaDTO) {
    return this.guiaService.insertar(guiaDTO);
  }

  @Get()
  todos() {
    return this.guiaService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.guiaService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() guiaDTO: GuiaDTO) {
    return this.guiaService.actualizar(id, guiaDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.guiaService.eliminar(id);
  }
}