import { Injectable } from '@nestjs/common';
import { CreateStudentsScanDto } from './dto/create-students-scan.dto';
import { UpdateStudentsScanDto } from './dto/update-students-scan.dto';

@Injectable()
export class StudentsScanService {
  create(createStudentsScanDto: CreateStudentsScanDto) {
    return 'This action adds a new studentsScan';
  }

  findAll() {
    return `This action returns all studentsScan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentsScan`;
  }

  update(id: number, updateStudentsScanDto: UpdateStudentsScanDto) {
    return `This action updates a #${id} studentsScan`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentsScan`;
  }
}
