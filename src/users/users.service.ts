import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

export interface DummyUser {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
    constructor(
      private prismaService: PrismaService

    ) {}

    private readonly users:DummyUser[] = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];

      async findOne(username: string): Promise<DummyUser | undefined> {
        return this.users.find(user => user.username === username);
      }

      async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User|null> {
        return this.prismaService.user.findUnique({where: userWhereUniqueInput})
      }

      async createUser(data: Prisma.UserCreateInput){
        return this.prismaService.user.create({data})
      }

      
}
