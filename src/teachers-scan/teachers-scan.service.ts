import { Injectable } from '@nestjs/common';
import { CreateTeachersScanDto } from './dto/create-teachers-scan.dto';
import { UpdateTeachersScanDto } from './dto/update-teachers-scan.dto';

@Injectable()
export class TeachersScanService {
  create(createTeachersScanDto: CreateTeachersScanDto) {
    return 'This action adds a new teachersScan';
  }

  findAll() {
    return `This action returns all teachersScan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teachersScan`;
  }

  update(id: number, updateTeachersScanDto: UpdateTeachersScanDto) {
    return `This action updates a #${id} teachersScan`;
  }

  remove(id: number) {
    return `This action removes a #${id} teachersScan`;
  }
}
