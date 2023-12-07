import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DummyUser, UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
      ) {}

    async login(username: string, pass: string){
        const user = await this.usersService.findOne(username);

        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }

        const payload = {sub: user.userId, username: user.username}

        return {access_token: await this.jwtService.signAsync(payload)};
      }

    

}
