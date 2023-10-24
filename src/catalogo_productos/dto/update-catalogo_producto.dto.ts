import { PartialType } from '@nestjs/swagger';
import { CreateCatalogoProductoDto } from './create-catalogo_producto.dto';

export class UpdateCatalogoProductoDto extends PartialType(CreateCatalogoProductoDto) {}
