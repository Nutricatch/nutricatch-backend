import { Controller, Post, Get, UseGuards, Body, Request, UsePipes, ParseIntPipe, Query } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { DailyConsumtionService } from './daily-consumtion.service';
import { Prisma } from '@prisma/client';
import { CreateDailyConsumtionDTO } from './create-daily-consumtion.dto';
import { DateQueryDto } from './date-query.dto';
import { ApiTags } from '@nestjs/swagger';
@Controller('daily-consumtion')
export class DailyConsumtionController {

    constructor(
        private dailyConsumtionService: DailyConsumtionService
    ) { }

    @ApiTags('User Daily Consumtion')
    @UseGuards(AuthGuard)
    @Get('all-daily-consumtion')
    async allDailyConsumtion(@Request() req) {
        const userId: number = req.user.userId;
        return this.dailyConsumtionService.getAllUserDailyConsumtion(userId)
    }

    @ApiTags('User Daily Consumtion')
    @UseGuards(AuthGuard)
    @Get('daily-consumtion-by-date')
    async dailyConsumtionByDate(@Request() req, @Query() date: DateQueryDto){
        const userId: number = req.user.userId;
        return this.dailyConsumtionService.getUserDailyConsumtionByDate(userId, date)
    }

    @ApiTags('User Daily Consumtion')
    @UseGuards(AuthGuard)
    @Post('create-daily-consumtion')
    async createDailyConsumtion(@Request() req, @Body() postData: CreateDailyConsumtionDTO) {
        const userId: number = req.user.userId;
        return await this.dailyConsumtionService.createDailyConsumtion(userId, postData)
    }
    
}
