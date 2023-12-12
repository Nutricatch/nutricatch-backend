import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { DailyConsumtion } from '@prisma/client';
import { UserHealthService } from 'src/user-health/user-health.service';
import { CreateDailyConsumtionDTO } from './create-daily-consumtion.dto';

@Injectable()
export class DailyConsumtionService {
    constructor(
        private userHealthService: UserHealthService,
        private prismaService: PrismaService
    ){}

    async createDailyConsumtion(userId: number, newData: CreateDailyConsumtionDTO){
        // Get user health Service
        // get user health id
        // create daily consumtion with healthId
        
        const userHealth = await this.userHealthService.userHealth(userId)
        const data = {...newData, health: {connect: {id: userHealth.id}}}
        return await this.prismaService.dailyConsumtion.create({data})
    }
}
