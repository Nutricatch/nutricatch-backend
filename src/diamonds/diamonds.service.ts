import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiamondsService {
    constructor(
        private userService: UsersService,
        private prismaService: PrismaService
    ) { }

    async getDiamonds(userId: number) {
        const user = await this.userService.getUser({ id: userId })
        return user.diamonds
    }

    async useOneDiamond(userId: number) {
        const user = await this.userService.getUser({ id: userId })
        const diamonds = user.diamonds
        if (diamonds === 0) {
            return { id: user.id, email: user.email, diamonds: diamonds }
        }
        const reducedDiamonds = diamonds - 1
        const result = await this.prismaService.user.update({ data: { diamonds: reducedDiamonds }, where: { email: user.email } })
        return { id: result.id, email: result.email, diamonds: result.diamonds }
    }

    async addDiamond(userId: number, diamondCounts: number) {
        const user = await this.userService.getUser({ id: userId })
        const result = await this.prismaService.user.update({
             data: { diamonds: user.diamonds + diamondCounts }, 
             where: { email: user.email } 
        })

        return result
    }

}
