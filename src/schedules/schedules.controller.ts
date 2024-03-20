import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
// import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('schedules')
@ApiTags('schedules')
@ApiBearerAuth('jwt')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.create(createScheduleDto);
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Put('cancel/:id')
  update(@Param('id') id: string) {
    return this.schedulesService.cancelSchedule(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(+id);
  }

  @Get('details')
  findSchedulesWithDetails() {
    return this.schedulesService.findSchedulesWithDetails();
  }

  @Get('filter/:filter')
  filterSchedules(@Param('filter') filter: string) {
    return this.schedulesService.filterSchedules(filter);
  }

  @Get('reserved')
  findSchedulesReservaded() {
    return this.schedulesService.findReservedSchedules();
  }
}
