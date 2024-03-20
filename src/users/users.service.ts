import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { fetchTimezone } from 'src/utils/timezone.util';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(data.password, salt);
      data.password = hash;

      const user = await this.prisma.user.findUnique({
        where: { email: data.email },
      });
      if (user) {
        throw new Error('User already exists');
      }

      return await this.prisma.user.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return {
      users: users.map((user) => ({
        ...user,
        createdAt: fetchTimezone(user.createdAt),
      })),
    };
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateUserDto) {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
