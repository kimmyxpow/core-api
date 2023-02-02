import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(Staff)
        private staffRepository: Repository<Staff>,
    ) {}

    async create(createStaffDto: CreateStaffDto) {
        return await this.staffRepository.save(createStaffDto);
    }

    async findAll() {
        return await this.staffRepository.find();
    }

    async findOne(id: string) {
        return await this.staffRepository.findOneBy({ id });
    }

    async update(id: string, updateStaffDto: UpdateStaffDto) {
        return await this.staffRepository.update({ id }, updateStaffDto);
    }

    async remove(id: string) {
        return await this.staffRepository.delete({ id });
    }
}

