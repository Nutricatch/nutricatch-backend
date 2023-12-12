import { Controller, Post, Get, UseGuards, Body, Request, UsePipes, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { DailyConsumtionService } from './daily-consumtion.service';
import { Prisma } from '@prisma/client';
import { CreateDailyConsumtionDTO } from './create-daily-consumtion.dto';

@Controller('daily-consumtion')
export class DailyConsumtionController {
    // TODO
    // Create Daily Consumtion, link to the user
    // Get All Daily Consumtion By Date
    // Get All user comsumtion
   constructor(
    private dailyConsumtionService: DailyConsumtionService
   ){

   }
    @UseGuards(AuthGuard)
    @Post('create-daily-consumtion')
    async createDailyConsumtion(@Request() req, @Body() postData: CreateDailyConsumtionDTO){
        const userId:number = req.user.userId;
        return await this.dailyConsumtionService.createDailyConsumtion(userId, postData)

    }
}
