import { Injectable, NotFoundException } from '@nestjs/common';
import { UserHealthService } from 'src/user-health/user-health.service';

@Injectable()
export class NutritionRecommenderService {

    constructor(
        private userHealthService: UserHealthService
    ) { }
    
    // We use the Harris-Benedict equation
    async getDailyCaloriesRecommendation(userId: number) {
        const userHealth = await this.userHealthService.userHealth(userId)
        if (!userHealth.gender || !userHealth.weight || !userHealth.age || !userHealth.height) {
            throw new NotFoundException("User data is not enough to calculate recommendation")
        }

        const men_bmr = 88.362 
        + (9.247 * userHealth.weight) 
        + (4.799 * userHealth.height) 
        - (5.677 * userHealth.age)

        const women_bmr = 447.593 
        + (9.247 * userHealth.weight)
        +(3.098 * userHealth.height)
        - (4.330 * userHealth.age)

        const usedConst = userHealth.gender === "MALE" ? men_bmr : women_bmr
        
        if(userHealth.activityLevel === "LIGHTLY"){
            return usedConst * 1.2
        }

        if(userHealth.activityLevel === "SEDENTARY"){
            return usedConst * 1.375
        }

        if(userHealth.activityLevel === "MODERATELY"){
            return usedConst * 1.55
        }

        if(userHealth.activityLevel === "VERY_ACTIVE"){
            return usedConst * 1.725
        }

        if(userHealth.activityLevel === "EXTREMELY_ACTIVE"){
            return usedConst * 1.9
        }

        

    }

}
