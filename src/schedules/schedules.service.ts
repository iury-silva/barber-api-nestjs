import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
// import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/database/prisma.service';
import { createTimezone, fetchTimezone } from 'src/utils/timezone.util';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateScheduleDto) {
    return await this.prisma.schedule.create({
      data: {
        ...data,
        bookingDate: createTimezone(data.bookingDate),
      },
    });
  }

  async findAll() {
    return await this.prisma.schedule.findMany({
      include: {
        barber: true,
        user: true,
        service: true,
      },
    });
  }

  async filterSchedules(filter: string) {
    const filterSchedule = await this.prisma.schedule.findMany({
      where: {
        status: filter,
      },
      include: {
        barber: {
          select: {
            name: true,
          },
        },
        user: true,
        service: {
          select: {
            name: true,
            price: true,
          },
        },
      },
    });

    const newFilterSchedule = filterSchedule.map((schedule) => ({
      bookingDate: fetchTimezone(schedule.bookingDate),
      user: schedule.user,
      userName: schedule.user.name,
      barberName: schedule.barber.name,
      serviceName: schedule.service.name,
      servicePrice: schedule.service.price,
    }));

    return newFilterSchedule;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} schedule`;
  // }

  async cancelSchedule(id: string) {
    return await this.prisma.schedule.update({
      where: {
        id,
      },
      data: {
        status: 'cancelado',
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }

  async findSchedulesByBarberId(barberId: string) {
    return await this.prisma.schedule.findMany({
      where: {
        barberId,
      },
    });
  }

  async findSchedulesByUserId(userId: string) {
    return await this.prisma.schedule.findMany({
      where: {
        userId,
      },
    });
  }

  async findSchedulesWithDetails() {
    const schedules = await this.prisma.schedule.findMany({
      select: {
        bookingDate: true,
        barber: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        service: {
          select: {
            name: true,
            price: true,
          },
        },
      },
    });

    const newSchedules = schedules.map((schedule) => ({
      bookingDate: fetchTimezone(schedule.bookingDate),
      userName: schedule.user.name,
      barberName: schedule.barber.name,
      serviceName: schedule.service.name,
      servicePrice: schedule.service.price++,
    }));

    return newSchedules;
  }

  async findReservedSchedules() {
    const reserved = await this.prisma.schedule.findMany({
      where: {
        status: 'reservado',
      },
      orderBy: {
        bookingDate: 'asc',
      },
    });

    const newReserved = reserved.map((schedule) => ({
      ...schedule,
      bookingDate: fetchTimezone(schedule.bookingDate),
    }));

    return newReserved;
  }
}
