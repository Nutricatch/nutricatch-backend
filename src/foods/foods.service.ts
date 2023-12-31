import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FoodsService {
  private readonly foodFilePath = 'public/food_nutrition.json';

  private getFoodsData(): any[] {
    const rawData = fs.readFileSync(this.foodFilePath, 'utf8');
    const parsedData = JSON.parse(rawData);
    return parsedData;
  }

  getFoods() {
    return this.getFoodsData();
  }

  getFoodByName(name: string) {
    const foodList = this.getFoods()
    return foodList.find(food => food.name === name);
  }

}
