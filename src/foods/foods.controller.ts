import { Controller, Get, Param } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodService: FoodsService) {}

  @ApiTags('Foods')
  @Get()
  async getFoods() {
    const foodData = await this.foodService.getFoods();
    return foodData;
  }

  @ApiTags('Foods')
  @Get(':name')
  getFoodByName(@Param('name') name: string) {
    const food = this.foodService.getFoodByName(name);

    if (food) {
      return food;
    } else {
      return { error: 'Food not found' };
    }
  }

}
