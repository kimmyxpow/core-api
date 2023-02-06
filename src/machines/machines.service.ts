import { Injectable } from '@nestjs/common'
import { CreateMachineDto } from './dto/create-machine.dto'
import { UpdateMachineDto } from './dto/update-machine.dto'
import { Machine } from './entities/machine.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class MachinesService {
    constructor(
        @InjectRepository(Machine)
        private machinesRepository: Repository<Machine>,
    ) {}

    async create(createMachineDto: CreateMachineDto) {
        return await this.machinesRepository.save(createMachineDto)
    }

    async findAll() {
        return await this.machinesRepository.find()
    }

    async findOne(id: string) {
        return await this.machinesRepository.findOneBy({ id })
    }

    async findByAdress(address: string) {
        return await this.machinesRepository.findOneBy({ address })
    }

    async update(id: string, updateMachineDto: UpdateMachineDto) {
        return await this.machinesRepository.update({ id }, updateMachineDto)
    }

    async remove(id: string) {
        return await this.machinesRepository.delete({ id })
    }
}
