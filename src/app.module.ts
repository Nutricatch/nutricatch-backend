import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [FoodsModule, AuthModule, UsersModule],
})
export class AppModule {}
