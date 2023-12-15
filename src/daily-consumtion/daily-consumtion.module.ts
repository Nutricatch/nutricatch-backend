import { Module } from '@nestjs/common';
import { DailyConsumtionController } from './daily-consumtion.controller';
import { DailyConsumtionService } from './daily-consumtion.service';
import { UserHealthModule } from 'src/user-health/user-health.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UserHealthModule, PrismaModule],
  controllers: [DailyConsumtionController],
  providers: [DailyConsumtionService]
})
export class DailyConsumtionModule {}
