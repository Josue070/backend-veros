import { Module } from '@nestjs/common';
import { CatalogoProductosService } from './catalogo_productos.service';
import { CatalogoProductosController } from './catalogo_productos.controller';

@Module({
  controllers: [CatalogoProductosController],
  providers: [CatalogoProductosService],
})
export class CatalogoProductosModule {}
