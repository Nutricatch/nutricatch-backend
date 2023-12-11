import { Controller, Get, UseGuards, Request, Post, Body, ParseIntPipe, ParseFloatPipe, ValidationPipe, UsePipes} from '@nestjs/common';
import { UserHealthService } from './user-health.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from 'src/users/users.service';
import { Gender } from '@prisma/client';
import { UpdateUserHealthDTO } from './update-user-health.dto';


@Controller('user-health')
export class UserHealthController {

    constructor(
        private userHealthService: UserHealthService,
        ){}

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req)
    {
        return req.user;
    }

    @UseGuards(AuthGuard)
    @Get('health')
    getUserHealth(@Request() req){
        const userId:number = req.user.userId;
        return this.userHealthService.userHealth(userId)
    }

    @UseGuards(AuthGuard)
    @Post('update')
    updateUserHealth(@Request() req, @Body() postData: UpdateUserHealthDTO){
        const userId:number = req.user.userId;
        return this.userHealthService.updateUserHealth(userId, postData)
    }
}
