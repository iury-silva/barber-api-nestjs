import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class BarberGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user.user_type === 'barber') {
      return true;
    } else {
      throw new ForbiddenException('Acesso negado para este usuário.');
    }
  }
}
