import { Test, TestingModule } from '@nestjs/testing';
import { DailyConsumtionService } from './daily-consumtion.service';

describe('DailyConsumtionService', () => {
  let service: DailyConsumtionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyConsumtionService],
    }).compile();

    service = module.get<DailyConsumtionService>(DailyConsumtionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
