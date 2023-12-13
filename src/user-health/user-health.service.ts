import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UserHealthService {
  constructor(
    private prismaService: PrismaService,
    private usersService: UsersService
    ){}

  async userHealth(userId: number){
    let userHealth = await this.prismaService.health.findUnique({
      where: {userId}
    })

    return userHealth
  }

  async createUserHealth(data: Prisma.HealthCreateInput) {
    return this.prismaService.health.create({data})
  }

  async updateUserHealth(userId: number, data: Prisma.HealthUpdateInput){

    const userHealth = await this.userHealth(userId)
    
    return this.prismaService.health.update({data, where: {id: userHealth.id}})
  }

}
