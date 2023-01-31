import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(Class)
        private classRepository: Repository<Class>
    ) {}

    async create(createClassDto: CreateClassDto) {
        return await this.classRepository.save(createClassDto);
    }

    async findAll() {
        return await this.classRepository.find();
    }

    async findOne(id: string) {
        return await this.classRepository.findOneBy({ id });
    }

    async update(id: string, updateClassDto: UpdateClassDto) {
        return await this.classRepository.update({ id }, updateClassDto);
    }

    async remove(id: string) {
        return await this.classRepository.delete({ id });
    }
}
