import { Injectable, UnauthorizedException, HttpException, HttpStatus} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
      ) {}

    async login(email: string, password: string){

        try{
          const user = await this.usersService.getUser({email})
          const isPasswordMatch = await bcrypt.compare(password, user?.password);

          if (!isPasswordMatch) {
            throw new UnauthorizedException();
          }

          const token = await this.generateToken(user.id, user.name, user.email)
          return {message: "login complete", access_token: token};
        } catch {
          throw new UnauthorizedException();
        }

      }
    
    async register(newUserData: {name: string, email: string, password: string}){

      const isPasswordValid = this.isPasswordValid(newUserData.password, 6)
      if(!isPasswordValid){
        throw new HttpException({
          status: HttpStatus.NOT_ACCEPTABLE,
          error: `Password is not valid, register failed`,
        }, HttpStatus.NOT_ACCEPTABLE);        
      }
    
      const hash = await this.hashPassword(newUserData.password)


      const userData = await this.usersService.createUser({ ...newUserData, password: hash,})
      const token = await this.generateToken(userData.id, userData.name, userData.email)
      
      return {message: "register complete", access_token: token}
    }

    private async generateToken(userId: number, username: string, email: string){
      const payload = {userId, username, email}
      const token = await this.jwtService.signAsync(payload)
      return token
    }

    private async hashPassword(password: string): Promise<string> {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    }

    private isPasswordValid(password: string, minLength: number){
      const isValid = password.length >= minLength
      return isValid;
    }

}
