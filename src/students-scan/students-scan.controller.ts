import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsScanService } from './students-scan.service';
import { CreateStudentsScanDto } from './dto/create-students-scan.dto';
import { UpdateStudentsScanDto } from './dto/update-students-scan.dto';

@Controller('students-scan')
export class StudentsScanController {
  constructor(private readonly studentsScanService: StudentsScanService) {}

  @Post()
  create(@Body() createStudentsScanDto: CreateStudentsScanDto) {
    return this.studentsScanService.create(createStudentsScanDto);
  }

  @Get()
  findAll() {
    return this.studentsScanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsScanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsScanDto: UpdateStudentsScanDto) {
    return this.studentsScanService.update(+id, updateStudentsScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsScanService.remove(+id);
  }
}
