import { Injectable, NotFoundException } from '@nestjs/common';
import { UserHealthService } from 'src/user-health/user-health.service';

@Injectable()
export class NutritionRecommenderService {

    constructor(
        private userHealthService: UserHealthService
    ) { }

    async getAllDailyRecommendation(userId:number){
        const calories = await this.getDailyCaloriesRecommendation(userId)
        const protein = this.getDailyProtein(calories)
        const fats = this.getDailyFats(calories)
        const carbohydrates = this.getDailyCarbohydrates(calories)
        return {calories: calories.toFixed(), protein, fats, carbohydrates}
    }

    getDailyProtein(userDailyCalores:number,  ratio=0.3){
        const protein = userDailyCalores * ratio / 4
        return protein.toFixed()
    }

    getDailyCarbohydrates(userDailyCalores:number,  ratio=0.4){
        const carbohydrates = userDailyCalores * ratio / 4
        return carbohydrates.toFixed()
    }

    getDailyFats(userDailyCalores:number, ratio=0.3){
        const fats = userDailyCalores * ratio / 9
        return fats.toFixed()
    }
    
    // We use the Harris-Benedict equation
    async getDailyCaloriesRecommendation(userId: number) {
        const userHealth = await this.getUserHealth(userId)

        const men_bmr = 88.362 
        + (9.247 * userHealth.weight) 
        + (4.799 * userHealth.height) 
        - (5.677 * userHealth.age)

        const women_bmr = 447.593 
        + (9.247 * userHealth.weight)
        +(3.098 * userHealth.height)
        - (4.330 * userHealth.age)

        const usedConst = userHealth.gender === "MALE" ? men_bmr : women_bmr
        
        if(userHealth.activityLevel === "SEDENTARY"){
            return usedConst * 1.375
        }

        if(userHealth.activityLevel === "MODERATELY_ACTIVE"){
            return usedConst * 1.55
        }

        if(userHealth.activityLevel === "VERY_ACTIVE"){
            return usedConst * 1.725
        }

    }

    private async getUserHealth(userId: number){
        const userHealth = await this.userHealthService.userHealth(userId)
        if (!userHealth.gender || !userHealth.weight || !userHealth.age || !userHealth.height) {
            throw new NotFoundException("User data is not enough to calculate recommendation")
        }
        return userHealth
    }
}
