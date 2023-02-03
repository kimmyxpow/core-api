import { Injectable } from '@nestjs/common'
import { CreateClassDto } from './dto/create-class.dto'
import { UpdateClassDto } from './dto/update-class.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Class } from './entities/class.entity'

@Injectable()
export class ClassesService {
    constructor(
        @InjectRepository(Class)
        private classesRepository: Repository<Class>,
    ) { }

    async create(createClassDto: CreateClassDto) {
        return await this.classesRepository.save(createClassDto)
    }

    async findAll() {
        return await this.classesRepository.find()
    }

    async findOne(id: string) {
        return await this.classesRepository.findOneBy({ id })
    }

    async update(id: string, updateClassDto: UpdateClassDto) {
        return await this.classesRepository.update({ id }, updateClassDto)
    }

    async remove(id: string) {
        return await this.classesRepository.delete({ id })
    }
}
