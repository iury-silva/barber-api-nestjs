import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user.user_type === 'user') {
      return true;
    } else {
      throw new ForbiddenException('Acesso negado para este usuário.');
    }
  }
}
