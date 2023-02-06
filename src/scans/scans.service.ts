import { Injectable } from '@nestjs/common';
import { CreateScanDto } from './dto/create-scan.dto';
import { UpdateScanDto } from './dto/update-scan.dto';

@Injectable()
export class ScansService {
  create(createScanDto: CreateScanDto) {
    return 'This action adds a new scan';
  }

  findAll() {
    return `This action returns all scans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scan`;
  }

  update(id: number, updateScanDto: UpdateScanDto) {
    return `This action updates a #${id} scan`;
  }

  remove(id: number) {
    return `This action removes a #${id} scan`;
  }
}
