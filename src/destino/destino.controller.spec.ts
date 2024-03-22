import { Test, TestingModule } from '@nestjs/testing';
import { DestinoController } from './destino.controller';

describe('DestinoController', () => {
  let controller: DestinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinoController],
    }).compile();

    controller = module.get<DestinoController>(DestinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
