import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
      ) {}

    async login(email: string, password: string){

        const user = await this.usersService.getUser({email})

        if (user?.password !== password) {
          throw new UnauthorizedException();
        }

        const payload = {sub: user.id, username: user.name}

        return {message: "login complete", access_token: await this.jwtService.signAsync(payload)};
      }
    
    async register(newUserData: {name: string, email: string, password: string}){
      const userData = await this.usersService.createUser(newUserData)
      const payload = {sub: userData.id, username: userData.name}
      const token = await this.jwtService.signAsync(payload)
      return {message: "register complete", access_token: token}
    }

}
