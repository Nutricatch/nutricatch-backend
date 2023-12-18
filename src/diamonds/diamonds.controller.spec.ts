import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsController } from './diamonds.controller';

describe('DiamondsController', () => {
  let controller: DiamondsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiamondsController],
    }).compile();

    controller = module.get<DiamondsController>(DiamondsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
