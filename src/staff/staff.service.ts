import { User } from 'src/users/entities/user.entity'
import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateStaffDto } from './dto/create-staff.dto'
import { UpdateStaffDto } from './dto/update-staff.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async validateUnique(dto: CreateStaffDto | UpdateStaffDto, id?: string) {
        const user = await this.usersRepository.findOneBy({ id, type: "STAFF" })
        const checkRfid = await this.usersRepository.findOneBy({ rfid: dto.rfid })
        const checkEmail = await this.usersRepository.findOneBy({ email: dto.email })
        let errors: string[] = []

        if (checkRfid && (id ? checkRfid.rfid != user.rfid : true)) errors = [...errors, `User with rfid ${dto.rfid} already exist.`]
        if (checkEmail && (id ? checkEmail.email != user.email : true)) errors = [...errors, `User with email ${dto.email} already exist.`]

        if (errors.length > 0) throw new BadRequestException(errors)
    }

    async create(createStaffDto: CreateStaffDto) {
        this.validateUnique(createStaffDto)

        return await this.usersRepository.save({
            ...createStaffDto,
            password: await bcrypt.hash(createStaffDto.password, 10),
            type: "STAFF"
        })
    }

    async findAll() {
        return await this.usersRepository.findBy({ type: "STAFF" })
    }

    async findOne(id: string) {
        return await this.usersRepository.findOneBy({ id, type: "STAFF" })
    }

    async update(id: string, updateStaffDto: UpdateStaffDto) {
        this.validateUnique(updateStaffDto, id)

        if (updateStaffDto.password) updateStaffDto = { ...updateStaffDto, password: await bcrypt.hash(updateStaffDto.password, 10) }

        return await this.usersRepository.update({ id, type: "STAFF" }, updateStaffDto)
    }

    async remove(id: string) {
        return await this.usersRepository.delete({ id, type: "STAFF" })
    }
}

