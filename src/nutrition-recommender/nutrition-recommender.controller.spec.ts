import { Test, TestingModule } from '@nestjs/testing';
import { NutritionRecommenderController } from './nutrition-recommender.controller';

describe('NutritionRecommenderController', () => {
  let controller: NutritionRecommenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionRecommenderController],
    }).compile();

    controller = module.get<NutritionRecommenderController>(NutritionRecommenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
