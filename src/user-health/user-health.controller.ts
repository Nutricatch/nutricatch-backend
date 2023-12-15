import { Controller, Get, UseGuards, Request, Post, Body} from '@nestjs/common';
import { UserHealthService } from './user-health.service';
import { TokenGuard } from 'src/auth/token.guard';
import { UpdateUserHealthDTO } from './dtos/update-user-health.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-health')
export class UserHealthController {

    constructor(
        private userHealthService: UserHealthService,
        ){}
        
    @ApiTags('User Health Data')
    @UseGuards(TokenGuard)
    @Get('profile')
    getProfile(@Request() req)
    {
        return req.user;
    }

    @ApiTags('User Health Data')
    @UseGuards(TokenGuard)
    @Get('health')
    getUserHealth(@Request() req){
        const userId:number = req.user.userId;
        return this.userHealthService.userHealth(userId)
        
    }
    
    @ApiTags('User Health Data')
    @UseGuards(TokenGuard)
    @Post('update')
    updateUserHealth(@Request() req, @Body() postData: UpdateUserHealthDTO){
        const userId:number = req.user.userId;
        return this.userHealthService.updateUserHealth(userId, postData)
    }

    

}
