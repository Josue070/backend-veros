import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoProductosController } from './catalogo_productos.controller';
import { CatalogoProductosService } from './catalogo_productos.service';

describe('CatalogoProductosController', () => {
  let controller: CatalogoProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogoProductosController],
      providers: [CatalogoProductosService],
    }).compile();

    controller = module.get<CatalogoProductosController>(CatalogoProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
