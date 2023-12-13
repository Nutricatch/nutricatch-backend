import { Controller, HttpCode, Post, Body, HttpStatus, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';
import { GoogleStrategy } from './google.strategy';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService) {}

    @ApiTags('Authentication')
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginData: LoginDTO) {
        return await this.authService.login(loginData.email, loginData.password)
    }

    @ApiTags('Authentication')
    @HttpCode(HttpStatus.OK)
    @Post('register')
    async register(@Body() newUserData: RegisterDTO) {
        return this.authService.register(newUserData)
    }

    @ApiTags('Authentication')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('google'))
    @Get('google')
    async googleLogin() {}

    @ApiTags('Authentication')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('google'))
    @Get('google/redirect')
    async googleAuthRedirect(@Request() req) {
        return req.user
    }

}
