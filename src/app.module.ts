import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [FoodsModule, AuthModule, ConfigModule.forRoot() ],
  providers: [],
})
export class AppModule {}
