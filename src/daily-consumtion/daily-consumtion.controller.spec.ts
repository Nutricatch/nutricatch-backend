import { Test, TestingModule } from '@nestjs/testing';
import { DailyConsumtionController } from './daily-consumtion.controller';

describe('DailyConsumtionController', () => {
  let controller: DailyConsumtionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyConsumtionController],
    }).compile();

    controller = module.get<DailyConsumtionController>(DailyConsumtionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
