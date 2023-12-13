import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { jwtConstants } from './constant';
import { UserHealthModule } from 'src/user-health/user-health.module';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule,
    UserHealthModule,
     JwtModule.register({
      global: true,
       secret: jwtConstants.secret,
        signOptions: {expiresIn: '7d'}
      })]
})
export class AuthModule {}
