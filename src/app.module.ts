import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BarbersModule } from './barbers/barbers.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ServicesModule } from './services/services.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    UsersModule,
    BarbersModule,
    SchedulesModule,
    ServicesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
