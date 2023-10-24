import { Test, TestingModule } from '@nestjs/testing';
import { FamiliasController } from './familias.controller';
import { FamiliasService } from './familias.service';

describe('FamiliasController', () => {
  let controller: FamiliasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FamiliasController],
      providers: [FamiliasService],
    }).compile();

    controller = module.get<FamiliasController>(FamiliasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
