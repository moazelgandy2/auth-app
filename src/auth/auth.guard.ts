import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { token } = request.headers;

    if (!token) return false;
    try {
      const validToken = this.jwtService.verify(token, {
        secret: 'secret',
      });

      if (!validToken) return false;
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
