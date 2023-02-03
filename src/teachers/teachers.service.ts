import { User } from './../users/entities/user.entity'
import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { CreateTeacherDto } from './dto/create-teacher.dto'
import { UpdateTeacherDto } from './dto/update-teacher.dto'

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async validateUnique(dto: CreateTeacherDto | UpdateTeacherDto, id?: string) {
        const user = await this.usersRepository.findOneBy({ id, type: "TEACHER" })
        const checkRfid = await this.usersRepository.findOneBy({ rfid: dto.rfid })
        const checkEmail = await this.usersRepository.findOneBy({ email: dto.email })
        let errors: string[] = []

        if (checkRfid && (id ? checkRfid.rfid != user.rfid : true)) errors = [...errors, `User with rfid ${dto.rfid} already exist.`]
        if (checkEmail && (id ? checkEmail.email != user.email : true)) errors = [...errors, `User with email ${dto.email} already exist.`]

        if (errors.length > 0) throw new BadRequestException(errors)
    }

    async create(createTeacherDto: CreateTeacherDto) {
        this.validateUnique(createTeacherDto)

        return await this.usersRepository.save({
            ...createTeacherDto,
            password: await bcrypt.hash(createTeacherDto.password, 10),
            type: "TEACHER"
        })
    }

    async findAll() {
        return await this.usersRepository.findBy({ type: "TEACHER" })
    }

    async findOne(id: string) {
        return await this.usersRepository.findOneBy({ id, type: "TEACHER" })
    }

    async update(id: string, updateTeacherDto: UpdateTeacherDto) {
        this.validateUnique(updateTeacherDto, id)

        if (updateTeacherDto.password) updateTeacherDto = { ...updateTeacherDto, password: await bcrypt.hash(updateTeacherDto.password, 10) }

        return await this.usersRepository.update({ id, type: "TEACHER" }, updateTeacherDto)
    }

    async remove(id: string) {
        return await this.usersRepository.delete({ id, type: "TEACHER" })
    }
}

