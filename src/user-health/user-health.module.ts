import { Module } from '@nestjs/common';
import { UserHealthController } from './user-health.controller';
import { UserHealthService } from './user-health.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [UserHealthController],
  providers: [UserHealthService],
  exports: [UserHealthService]
})
export class UserHealthModule {}
