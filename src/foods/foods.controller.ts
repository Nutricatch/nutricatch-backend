import { Controller, Post, UseInterceptors, UploadedFile, Get, Res, HttpException, HttpStatus } from '@nestjs/common';
import { FoodsService } from './foods.service';


@Controller('foods')
export class FoodsController {
  constructor(private readonly foodService: FoodsService) {}

  @Get()
  async getFoods() {
    const foodData = await this.foodService.getFoods()
    return foodData
  }

}