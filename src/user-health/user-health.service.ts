import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Health } from '@prisma/client';

@Injectable()
export class UserHealthService {
  constructor(private prismaService: PrismaService){}

  async userHealth(where: Prisma.HealthWhereUniqueInput){
    return this.prismaService.health.findUnique({where})
  }

  async setupUserHealth(data: Prisma.HealthCreateInput) {
    return this.prismaService.health.create({data})
  }

  async updateUserHealth(where: Prisma.HealthWhereUniqueInput, data: Prisma.HealthUpdateInput){
    return this.prismaService.health.update({data, where})
  }

  

}
