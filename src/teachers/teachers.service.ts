import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(Teacher)
        private teachersRepository: Repository<Teacher>,
    ) {}
    async create(createTeacherDto: CreateTeacherDto) {
        return await this.teachersRepository.save(createTeacherDto);
    }

    async findAll() {
        return await this.teachersRepository.find();
    }

    async findOne(id: string) {
        return await this.teachersRepository.findOneBy({ id });
    }

    async update(id: string, updateTeacherDto: UpdateTeacherDto) {
        return await this.teachersRepository.update({ id }, updateTeacherDto);
    }

    async remove(id: string) {
        return await this.teachersRepository.delete({ id });
    }
}

