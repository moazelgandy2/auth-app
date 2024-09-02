import { SignInDTO } from './auth.dto';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInService {
  constructor(
    @InjectModel(User.name) private user: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(body: SignInDTO) {
    let user = await this.user.findOne({
      email: body.email,
    });

    if (!user) {
      throw new HttpException(
        { success: false, message: "User doesn't exists" },
        HttpStatus.CONFLICT,
      );
    }

    const validPassword = bcrypt.compareSync(
      body.password,
      user.password as string,
    );

    if (!validPassword) {
      throw new HttpException(
        { success: false, message: 'Invalid credentials' },
        HttpStatus.UNAUTHORIZED,
      );
    }
    const token = await this.jwtService.signAsync(
      {
        email: user.email,
        id: user._id,
      },
      { secret: 'secret' },
    );
    return { success: true, message: 'LoggedIn successfully', token };
  }
}
