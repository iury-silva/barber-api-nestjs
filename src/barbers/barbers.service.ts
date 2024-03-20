import { Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BarbersService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateBarberDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    return await this.prisma.barber.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.barber.findMany();
  }

  findOne(id: string) {
    const barber = this.prisma.barber.findUnique({
      where: {
        id: id,
      },
      include: {
        Service: true,
      },
    });

    return barber;
  }

  update(id: string, updateBarberDto: UpdateBarberDto) {
    return `This action updates a #${id} barber`;
  }

  remove(id: string) {
    return `This action removes a #${id} barber`;
  }
}
