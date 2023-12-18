import { Module } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { DiamondsController } from './diamonds.controller';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UsersModule, PrismaModule],
  providers: [DiamondsService],
  controllers: [DiamondsController]
})
export class DiamondsModule {}
