import { Controller, Get } from '@nestjs/common';
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
}
