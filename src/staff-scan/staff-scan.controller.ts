import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StaffScanService } from './staff-scan.service';
import { CreateStaffScanDto } from './dto/create-staff-scan.dto';
import { UpdateStaffScanDto } from './dto/update-staff-scan.dto';

@Controller('staff-scan')
export class StaffScanController {
  constructor(private readonly staffScanService: StaffScanService) {}

  @Post()
  create(@Body() createStaffScanDto: CreateStaffScanDto) {
    return this.staffScanService.create(createStaffScanDto);
  }

  @Get()
  findAll() {
    return this.staffScanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffScanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffScanDto: UpdateStaffScanDto) {
    return this.staffScanService.update(+id, updateStaffScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffScanService.remove(+id);
  }
}
