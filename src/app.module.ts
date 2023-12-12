import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserHealthModule } from './user-health/user-health.module';
import { DailyConsumtionModule } from './daily-consumtion/daily-consumtion.module';

@Module({
  imports: [FoodsModule, AuthModule, ConfigModule.forRoot(), UserHealthModule, DailyConsumtionModule ],
  providers: [],
})
export class AppModule {}
