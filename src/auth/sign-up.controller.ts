import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDTO } from './auth.dto';
import { SignUpService } from './sign-up.service';

@Controller('auth')
export class SignUpController {
  constructor(private _signUpService: SignUpService) {}

  @Post('signup')
  singUp(@Body() body: SignUpDTO) {
    return this._signUpService.signUp(body);
  }
}
