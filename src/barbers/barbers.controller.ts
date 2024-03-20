import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { Public } from 'src/auth/decorators/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('barbers')
@ApiTags('barbers')
export class BarbersController {
  constructor(private readonly barbersService: BarbersService) {}

  @Post()
  @Public()
  create(@Body() createBarberDto: CreateBarberDto) {
    return this.barbersService.create(createBarberDto);
  }

  @Get()
  findAll() {
    return this.barbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barbersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarberDto: UpdateBarberDto) {
    return this.barbersService.update(id, updateBarberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barbersService.remove(id);
  }
}
