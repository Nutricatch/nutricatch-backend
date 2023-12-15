import { Controller, Post, Get, UseGuards, Body, Request, UsePipes, ParseIntPipe, Query } from '@nestjs/common';
import { TokenGuard } from 'src/auth/token.guard';
import { DailyConsumtionService } from './daily-consumtion.service';
import { Prisma } from '@prisma/client';
import { CreateDailyConsumtionDTO } from './dtos/create-daily-consumtion.dto';
import { DateQueryDto } from './date-query.dto';
import { ApiTags } from '@nestjs/swagger';
import { DeleteDailyConsumtionByIdDTO } from './dtos/delete-daily-consumtion.dto';
@Controller('daily-consumtion')
export class DailyConsumtionController {

    constructor(
        private dailyConsumtionService: DailyConsumtionService
    ) { }

    @ApiTags('User Daily Consumtion')
    @UseGuards(TokenGuard)
    @Get('all-daily-consumtion')
    async allDailyConsumtion(@Request() req) {
        const userId: number = req.user.userId;
        return this.dailyConsumtionService.getAllUserDailyConsumtion(userId)
    }

    @ApiTags('User Daily Consumtion')
    @UseGuards(TokenGuard)
    @Get('daily-consumtion-by-date')
    async dailyConsumtionByDate(@Request() req, @Query() date: DateQueryDto){
        const userId: number = req.user.userId;
        return this.dailyConsumtionService.getUserDailyConsumtionByDate(userId, date)
    }

    @ApiTags('User Daily Consumtion')
    @UseGuards(TokenGuard)
    @Post('create-daily-consumtion')
    async createDailyConsumtion(@Request() req, @Body() postData: CreateDailyConsumtionDTO) {
        const userId: number = req.user.userId;
        return await this.dailyConsumtionService.createDailyConsumtion(userId, postData)
    }

    @ApiTags('User Daily Consumtion')
    @UseGuards(TokenGuard)
    @Post('delete-daily-consumtion-by-id')
    async deleteDailyConsumtionById(@Request() req, @Body() postData: DeleteDailyConsumtionByIdDTO){
        const userId: number = req.user.userId;
        return await this.dailyConsumtionService.deleteDailyConsumtionById(userId, postData.consumtionId)
    }
    
}
