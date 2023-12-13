import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: '546778227355-4ssok1d3gn0in4u8tigpn0rekdvaq8ue.apps.googleusercontent.com',
      clientSecret: 'OlXLASraWwzmYVT7yVGF9n5U',
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      passReqToCallback: true,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const user = await this.authService.validateGoogleUser(profile);
    done(null, user);
  }
}
