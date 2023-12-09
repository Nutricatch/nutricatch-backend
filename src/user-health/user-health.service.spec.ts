import { Test, TestingModule } from '@nestjs/testing';
import { UserHealthService } from './user-health.service';

describe('UserHealthService', () => {
  let service: UserHealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHealthService],
    }).compile();

    service = module.get<UserHealthService>(UserHealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
