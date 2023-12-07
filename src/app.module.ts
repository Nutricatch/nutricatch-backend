import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [FoodsModule, AuthModule, UsersModule, BlogsModule],

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [FoodsModule, AuthModule, ConfigModule.forRoot() ],
  providers: [],
})
export class AppModule {}
