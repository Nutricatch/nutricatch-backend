import { Controller, Get, Request, UseGuards, Post, Body } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { ApiTags } from '@nestjs/swagger';
import { TokenGuard } from 'src/auth/token.guard';
import { AddDiamondsDTO } from './add-diamonds.dto';

@Controller('diamonds')
export class DiamondsController {

    constructor(
        private diamondsService: DiamondsService
    ){}

    @ApiTags('Diamonds')
    @UseGuards(TokenGuard)
    @Get()
    async getDiamonds(@Request() req){
        const userId:number = req.user.userId;
        return await this.diamondsService.getDiamonds(userId)
    }

    @ApiTags('Diamonds')
    @UseGuards(TokenGuard)
    @Get('use-one')
    async useOneDiamonds(@Request() req){
        const userId:number = req.user.userId;
        return await this.diamondsService.useOneDiamond(userId)
    }

    @ApiTags('Diamonds')
    @UseGuards(TokenGuard)
    @Post('add')
    async addDiamonds(@Request() req, @Body() data: AddDiamondsDTO){
        const userId:number = req.user.userId;
        return this.diamondsService.addDiamond(userId, data.diamondCounts)
    }
}
