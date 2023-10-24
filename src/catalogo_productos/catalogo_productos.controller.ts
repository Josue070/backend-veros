import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogoProductosService } from './catalogo_productos.service';
import { CreateCatalogoProductoDto } from './dto/create-catalogo_producto.dto';
import { UpdateCatalogoProductoDto } from './dto/update-catalogo_producto.dto';

@Controller('catalogo-productos')
export class CatalogoProductosController {
  constructor(private readonly catalogoProductosService: CatalogoProductosService) {}

  @Post()
  create(@Body() createCatalogoProductoDto: CreateCatalogoProductoDto) {
    return this.catalogoProductosService.create(createCatalogoProductoDto);
  }

  @Get()
  findAll() {
    return this.catalogoProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogoProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogoProductoDto: UpdateCatalogoProductoDto) {
    return this.catalogoProductosService.update(+id, updateCatalogoProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogoProductosService.remove(+id);
  }
}
