import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Health } from '@prisma/client';
import { UserHealthService } from 'src/user-health/user-health.service';

@Injectable()
export class NutritionRecommenderService {

    constructor(
        private userHealthService: UserHealthService,
    ) { }

    async getDailyRecommendation(userId:number){
        const userHealth = await this.getUserHealth(userId)
        
        const calories = this.getDailyCaloriesRecommendation(userHealth)
        const protein = this.getDailyProtein(calories)
        const fats = this.getDailyFats(calories)
        const carbohydrates = this.getDailyCarbohydrates(calories)
        const fiber = this.getDailyFiber()
        const sodium = this.getDailyMaxSodium()
        const sugar = this.getDailyMaxSugar(userHealth)
        return {calories: calories.toFixed(), protein, fats, carbohydrates, fiber, sodium, sugar}
    }

    getDailyMaxSodium(){
        // The World Health Organization suggests a limit of 2,000 mg of sodium a day.
        return 2
    }

    getDailyMaxSugar(userHealth: Health){
        if(userHealth.gender === "MALE"){
            return 36
        } else {
            return 25
        }
    }

    getDailyFiber(){
        // The American Heart Association Eating Plan suggests eating a variety of food fiber sources.
        // Total dietary fiber intake should be 25 to 30 grams a day from food, not supplements.
        return 25
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
    getDailyCaloriesRecommendation(userHealth: Health) {
        
        let bmr = this.getBmr(userHealth)

        let calorieOffset = this.getCalorieOffset(userHealth)
        
        bmr += calorieOffset

        if(userHealth.activityLevel === "SEDENTARY"){
            return bmr * 1.375
        }

        if(userHealth.activityLevel === "MODERATELY_ACTIVE"){
            return bmr * 1.55
        }

        if(userHealth.activityLevel === "VERY_ACTIVE"){
            return bmr * 1.725
        }

    }

    private getBmr(userHealth: Health){
        const men_bmr = 88.362 
        + (9.247 * userHealth.weight) 
        + (4.799 * userHealth.height) 
        - (5.677 * userHealth.age)

        const women_bmr = 447.593 
        + (9.247 * userHealth.weight)
        +(3.098 * userHealth.height)
        - (4.330 * userHealth.age)

        let bmr = userHealth.gender === "MALE" ? men_bmr : women_bmr
        return bmr
    }

    private getCalorieOffset(userHealth: Health){
        let caloricOffset = 0

        if(userHealth.fitnessGoal === "WeightGain") {
            caloricOffset = 400
        } else if(userHealth.fitnessGoal === "WeightLoss") {
            caloricOffset = -600
        }

        return caloricOffset
    }

    private async getUserHealth(userId: number){
        const userHealth = await this.userHealthService.userHealth(userId)
        if (!userHealth.gender || !userHealth.weight || !userHealth.age || !userHealth.height) {
            throw new NotFoundException("User data is not enough to calculate recommendation")
        }
        return userHealth
    }
}
