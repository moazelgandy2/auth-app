import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { SignInDTO } from './auth.dto';

@Controller('auth')
export class SignInController {
  constructor(private _signInService: SignInService) {}

  @Post('signin')
  signIn(@Body() body: SignInDTO) {
    return this._signInService.signIn(body);
  }
}
