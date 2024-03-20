import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './models/userPayload';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  login(user: any) {
    const payload: UserPayload = {
      ...user,
    };

    const token = this.jwtService.sign(payload);

    return {
      user: payload,
      access_token: token,
    };
  }
  loginBarber(user: any) {
    console.log(user);

    const payload: UserPayload = {
      ...user,
    };

    const token = this.jwtService.sign(payload);

    return {
      user: payload,
      access_token: token,
    };
  }
  async validateUser(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return {
            ...user,
            password: undefined,
          };
        }
      }

      throw new Error('Login ou senha inválidos');
    } catch (error) {
      throw new Error(error);
    }
  }

  async validateBarber(email: string, password: string) {
    try {
      const barber = await this.prisma.barber.findUnique({
        where: { email },
      });

      if (barber) {
        const isMatch = await bcrypt.compare(password, barber.password);
        if (isMatch) {
          return {
            ...barber,
            password: undefined,
          };
        }
      }

      throw new Error('Login ou senha inválidos');
    } catch (error) {
      throw new Error(error);
    }
  }
}
