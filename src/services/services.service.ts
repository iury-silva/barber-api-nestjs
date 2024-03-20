import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateServiceDto) {
    const { barberId, name, price } = data;

    return await this.prisma.service.create({
      data: {
        name,
        price,
        barber: {
          connect: {
            id: barberId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.service.findMany();
  }

  async findOne(id: string) {
    return `This action returns a #${id} service`;
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    const { name, price } = updateServiceDto;
    return await this.prisma.service.update({
      where: { id },
      data: { name, price },
    });
  }

  async remove(id: string) {
    return `This action removes a #${id} service`;
  }
}
