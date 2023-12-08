import { Controller, HttpCode, Post, Body, HttpStatus, UseGuards, Request, Get, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersService } from 'src/users/users.service';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
        ) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginData: {email: string, password: string }) {
       
        return await this.authService.login(loginData.email, loginData.password)
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    async register(@Body() newUserData: {name: string, email: string, password: string}) {
        return this.authService.register(newUserData)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req)
    {
        return req.user;
    }


}
