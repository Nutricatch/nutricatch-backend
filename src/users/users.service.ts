import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prismaService.user.findUnique({ where: userWhereUniqueInput });
  }

  async createUser(data: Prisma.UserCreateInput) {
    try {
      return await this.prismaService.user.create({ data });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: `There is a problem creating a new user to the database using Prisma : ${error} `,
        },
        HttpStatus.NOT_ACCEPTABLE,
        {
          cause: error,
        },
      );
    }
  }
}
