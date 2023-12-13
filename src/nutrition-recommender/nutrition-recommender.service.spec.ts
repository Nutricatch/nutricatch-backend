import { Test, TestingModule } from '@nestjs/testing';
import { NutritionRecommenderService } from './nutrition-recommender.service';

describe('NutritionRecommenderService', () => {
  let service: NutritionRecommenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionRecommenderService],
    }).compile();

    service = module.get<NutritionRecommenderService>(NutritionRecommenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
