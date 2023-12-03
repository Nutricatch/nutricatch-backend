import { Controller, Post, UseInterceptors, UploadedFile, Get, Res, HttpException, HttpStatus } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodService: FoodsService) {}

  @Get()
  async getFoods() {
    return 'get food'
  }

  @Post('predict')
  @UseInterceptors(FileInterceptor('image'))
  async predict(@UploadedFile() image: Express.Multer.File) {
    
    try {
      const imageBuffer = image.buffer;
      const imageName = image.originalname;
      return {
        imageName,
      };

    } catch (error) { 

      throw new HttpException({
        error: 'Error from recieving image'
        
      }, HttpStatus.EXPECTATION_FAILED, {
        cause: error
      });

    }
   
  }


}