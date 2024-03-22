import { Test, TestingModule } from '@nestjs/testing';
import { DestinosService } from './destino.service';

describe('DestinoService', () => {
  let service: DestinosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinosService],
    }).compile();

    service = module.get<DestinosService>(DestinosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
