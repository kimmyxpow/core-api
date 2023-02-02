import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeachersScanService } from './teachers-scan.service';
import { CreateTeachersScanDto } from './dto/create-teachers-scan.dto';
import { UpdateTeachersScanDto } from './dto/update-teachers-scan.dto';

@Controller('teachers-scan')
export class TeachersScanController {
  constructor(private readonly teachersScanService: TeachersScanService) {}

  @Post()
  create(@Body() createTeachersScanDto: CreateTeachersScanDto) {
    return this.teachersScanService.create(createTeachersScanDto);
  }

  @Get()
  findAll() {
    return this.teachersScanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersScanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeachersScanDto: UpdateTeachersScanDto) {
    return this.teachersScanService.update(+id, updateTeachersScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersScanService.remove(+id);
  }
}
