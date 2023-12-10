import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UserHealthService } from './user-health.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from 'src/users/users.service';


@Controller('user-health')
export class UserHealthController {

    constructor(
        private userHealthService: UserHealthService,
        private usersService: UsersService
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
        return this.userHealthService.userHealth({id: userId})
    }




}
