import { Injectable } from '@nestjs/common';
import { CreateCatalogoProductoDto } from './dto/create-catalogo_producto.dto';
import { UpdateCatalogoProductoDto } from './dto/update-catalogo_producto.dto';

@Injectable()
export class CatalogoProductosService {
  create(createCatalogoProductoDto: CreateCatalogoProductoDto) {
    return 'This action adds a new catalogoProducto';
  }

  findAll() {
    return `This action returns all catalogoProductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogoProducto`;
  }

  update(id: number, updateCatalogoProductoDto: UpdateCatalogoProductoDto) {
    return `This action updates a #${id} catalogoProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogoProducto`;
  }
}
