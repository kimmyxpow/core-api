import { Injectable } from '@nestjs/common';
import { CreateStaffScanDto } from './dto/create-staff-scan.dto';
import { UpdateStaffScanDto } from './dto/update-staff-scan.dto';

@Injectable()
export class StaffScanService {
  create(createStaffScanDto: CreateStaffScanDto) {
    return 'This action adds a new staffScan';
  }

  findAll() {
    return `This action returns all staffScan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staffScan`;
  }

  update(id: number, updateStaffScanDto: UpdateStaffScanDto) {
    return `This action updates a #${id} staffScan`;
  }

  remove(id: number) {
    return `This action removes a #${id} staffScan`;
  }
}
