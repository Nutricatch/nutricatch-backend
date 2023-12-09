import { Test, TestingModule } from '@nestjs/testing';
import { UserHealthController } from './user-health.controller';

describe('UserHealthController', () => {
  let controller: UserHealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHealthController],
    }).compile();

    controller = module.get<UserHealthController>(UserHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
