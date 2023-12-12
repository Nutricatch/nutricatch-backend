import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserHealthService } from 'src/user-health/user-health.service';
import { CreateDailyConsumtionDTO } from './create-daily-consumtion.dto';
import { DateQueryDto } from './date-query.dto';

@Injectable()
export class DailyConsumtionService {
    constructor(
        private userHealthService: UserHealthService,
        private prismaService: PrismaService
    ){}

    async getUserDailyConsumtionByDate(userId: number, inputQuery: DateQueryDto){
        const userHealth = await this.userHealthService.userHealth(userId)

        const date = new Date(inputQuery.date);
        date.setHours(0, 0, 0, 0);
        const tomorrow = new Date()
        tomorrow.setDate(date.getDate() + 1);

        return await this.prismaService.dailyConsumtion.findMany({
            where: {
                healthId: userHealth.id,
                createdAt: {
                    gte: date.toISOString(),
                    lt: tomorrow
                }
            } 
        })

    }

    async getAllUserDailyConsumtion(userId: number){
        const userHealth = await this.userHealthService.userHealth(userId)
        return await this.prismaService.dailyConsumtion.findMany({where: {healthId: userHealth.id} })
    }

    async createDailyConsumtion(userId: number, newData: CreateDailyConsumtionDTO){
        const userHealth = await this.userHealthService.userHealth(userId)
        const data = {...newData, health: {connect: {id: userHealth.id}}}
        return await this.prismaService.dailyConsumtion.create({data})
    }
    
}
