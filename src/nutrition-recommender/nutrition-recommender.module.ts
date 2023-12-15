import { Module } from '@nestjs/common';
import { NutritionRecommenderService } from './nutrition-recommender.service';
import { NutritionRecommenderController } from './nutrition-recommender.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserHealthModule } from 'src/user-health/user-health.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, UserHealthModule],
  providers: [NutritionRecommenderService],
  controllers: [NutritionRecommenderController]
})
export class NutritionRecommenderModule {}
