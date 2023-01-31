import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionService {
    constructor(
        @InjectRepository(Region)
        private regionRepository: Repository<Region>
    ) {}

    async create(createRegionDto: CreateRegionDto) {
        return await this.regionRepository.save(createRegionDto);
    }

    async findAll() {
        return await this.regionRepository.find();
    }

    async findOne(id: string) {
        return await this.regionRepository.findOneBy({ id });
    }

    async update(id: string, updateRegionDto: UpdateRegionDto) {
        return await this.regionRepository.update({ id }, updateRegionDto);
    }

    async remove(id: string) {
        return await this.regionRepository.delete({ id });
    }
}
