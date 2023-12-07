import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { UserExistException } from './user-exist.exception';

@Injectable()
export class UsersService {
    constructor(
      private prismaService: PrismaService
    ) {}

      async getUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User|null> {
        return this.prismaService.user.findUnique({where: userWhereUniqueInput})
      }
    
      async createUser(data: Prisma.UserCreateInput){
        const isUserAlreadyExist = await this.getUser({email: data.email})

        if(isUserAlreadyExist){
          throw new UserExistException()
        }

        return this.prismaService.user.create({data})
      }


      //WARNING: DELETE THESE ON PRODUCTION
      async debugGetAllUsers(){
        return this.prismaService.user.findMany()
      }

      async debugDeleteAllUsers(){
        return this.prismaService.user.deleteMany()
      }
}
