import { Injectable } from '@nestjs/common'
import { CreateRegionDto } from './dto/create-region.dto'
import { UpdateRegionDto } from './dto/update-region.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Region } from './entities/region.entity'

@Injectable()
export class RegionsService {
    constructor(
        @InjectRepository(Region)
        private regionsRepository: Repository<Region>,
    ) { }

    async create(createRegionDto: CreateRegionDto) {
        return await this.regionsRepository.save(createRegionDto)
    }

    async findAll() {
        return await this.regionsRepository.find()
    }

    async findOne(id: string) {
        return await this.regionsRepository.findOneBy({ id })
    }

    async update(id: string, updateRegionDto: UpdateRegionDto) {
        return await this.regionsRepository.update({ id }, updateRegionDto)
    }

    async remove(id: string) {
        return await this.regionsRepository.delete({ id })
    }
}
