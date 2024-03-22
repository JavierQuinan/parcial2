import { Test, TestingModule } from '@nestjs/testing';
import { RelacionService } from './relaciones.service';

describe('RelacionesService', () => {
  let service: RelacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelacionService],
    }).compile();

    service = module.get<RelacionService>(RelacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
