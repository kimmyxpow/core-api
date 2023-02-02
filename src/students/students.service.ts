import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
    machinesRepository: any;
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
    ) {}
    async create(createStudentDto: CreateStudentDto) {
        return await this.studentsRepository.save(createStudentDto);
    }

    async findAll() {
        return await this.studentsRepository.find({
            relations: { region: true, class: true },
        });
    }

    async findOne(id: string) {
        return await this.studentsRepository.findOneBy({ id });
    }

    async update(id: string, updateStudentDto: UpdateStudentDto) {
        return await this.studentsRepository.update({ id }, updateStudentDto);
    }

    async remove(id: string) {
        return await this.studentsRepository.delete({ id });
    }
}
