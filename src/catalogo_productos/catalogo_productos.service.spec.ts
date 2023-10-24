import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoProductosService } from './catalogo_productos.service';

describe('CatalogoProductosService', () => {
  let service: CatalogoProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogoProductosService],
    }).compile();

    service = module.get<CatalogoProductosService>(CatalogoProductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
