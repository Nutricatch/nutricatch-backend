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

  async userHealth(where: Prisma.UserWhereUniqueInput){
    let userHealth = await this.prismaService.health.findUnique({
      where: {userId: where.id}
    })

    if (!userHealth) {
      userHealth = await this.createUserHealth({
        user: {connect: { id: where.id} }
      })
    }

    return userHealth
  }

  async createUserHealth(data: Prisma.HealthCreateInput) {
    return this.prismaService.health.create({data})
  }

  async updateUserHealth(where: Prisma.HealthWhereUniqueInput, data: Prisma.HealthUpdateInput){
    return this.prismaService.health.update({data, where})
  }

  

}
