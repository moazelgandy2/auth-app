import { SignUpDTO } from './auth.dto';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}

  async signUp(body: SignUpDTO) {
    let user = await this.user.findOne({
      email: body.email,
    });

    if (user) {
      throw new HttpException(
        { success: false, message: 'User already exists' },
        HttpStatus.CONFLICT,
      );
    }

    const res = await this.user.insertMany({
      ...body,
      password: bcrypt.hashSync(body.password, 10),
    });
    return { success: true, message: 'Signup success' };
  }
}
