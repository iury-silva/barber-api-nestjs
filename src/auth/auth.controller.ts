import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/authRequest';
import { Public } from './decorators/is-public.decorator';
import { BarberAuthGuard } from './guards/barber-auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'isilva@imply.com',
        },
        password: {
          type: 'string',
          example: 'imply1234',
        },
      },
    },
  })
  login(@Request() req: AuthRequest) {
    console.log(req.user);

    return this.authService.login(req.user);
  }

  @Post('barber/login')
  @Public()
  @UseGuards(BarberAuthGuard)
  @HttpCode(HttpStatus.OK)
  barberLogin(@Request() req: AuthRequest) {
    console.log(req.user);

    return this.authService.loginBarber(req.user);
  }
}
