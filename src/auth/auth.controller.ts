import { Controller, HttpCode, Post, Body, HttpStatus, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService) {}

    @ApiTags('Authentication')
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginData: {email: string, password: string }) {
        return await this.authService.login(loginData.email, loginData.password)
    }

    @ApiTags('Authentication')
    @HttpCode(HttpStatus.OK)
    @Post('register')
    async register(@Body() newUserData: {name: string, email: string, password: string}) {
        return this.authService.register(newUserData)
    }


}
