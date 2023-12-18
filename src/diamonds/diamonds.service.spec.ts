import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsService } from './diamonds.service';

describe('DiamondsService', () => {
  let service: DiamondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsService],
    }).compile();

    service = module.get<DiamondsService>(DiamondsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
