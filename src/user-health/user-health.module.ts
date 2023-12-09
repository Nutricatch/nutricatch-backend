import { Module } from '@nestjs/common';
import { UserHealthController } from './user-health.controller';
import { UserHealthService } from './user-health.service';

@Module({
  controllers: [UserHealthController],
  providers: [UserHealthService]
})
export class UserHealthModule {}
