import { Test, TestingModule } from '@nestjs/testing';
import { RelacionesController } from './relaciones.controller';

describe('RelacionesController', () => {
  let controller: RelacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelacionesController],
    }).compile();

    controller = module.get<RelacionesController>(RelacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
