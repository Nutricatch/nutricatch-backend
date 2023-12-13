import { Controller, Get, Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { NutritionRecommenderService } from './nutrition-recommender.service';

@Controller('nutrition-recommender')
export class NutritionRecommenderController {

    constructor(
        private nutritionRecommenderService: NutritionRecommenderService
    ){}

    //TODO
    // Get daily recommended calories and nutrition
    
    @ApiTags('User Daily Consumtion')
    @UseGuards(AuthGuard)
    @Get('daily-recomended-nutrition')
    async getDailyRecommendation(@Request() req){
        const userId: number = req.user.userId;
        return await this.nutritionRecommenderService.getDailyCaloriesRecommendation(userId)
    }


}
