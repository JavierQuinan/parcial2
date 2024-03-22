import { Test, TestingModule } from '@nestjs/testing';
import { TuristaController } from './turista.controller';

describe('TuristaController', () => {
  let controller: TuristaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuristaController],
    }).compile();

    controller = module.get<TuristaController>(TuristaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
