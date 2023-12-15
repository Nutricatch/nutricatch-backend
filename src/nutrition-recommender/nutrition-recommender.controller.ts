import { Controller, Get, Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TokenGuard } from 'src/auth/token.guard';
import { NutritionRecommenderService } from './nutrition-recommender.service';

@Controller('nutrition-recommender')
export class NutritionRecommenderController {

    constructor(
        private nutritionRecommenderService: NutritionRecommenderService
    ){}

    //TODO
    // Get daily recommended calories and nutrition
    
    @ApiTags('User Daily Consumtion')
    @UseGuards(TokenGuard)
    @Get('daily-recomended-nutrition')
    async getDailyRecommendation(@Request() req){
        const userId: number = req.user.userId;
        return await this.nutritionRecommenderService.getDailyRecommendation(userId)
    }


}
