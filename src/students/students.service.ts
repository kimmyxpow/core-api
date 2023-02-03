import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student.dto'
import { UpdateStudentDto } from './dto/update-student.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from 'src/users/entities/user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async validateUnique(dto: CreateStudentDto | UpdateStudentDto, id?: string) {
        const user = await this.usersRepository.findOneBy({ id, type: "STUDENT" })
        const checkRfid = await this.usersRepository.findOneBy({ rfid: dto.rfid })
        const checkEmail = await this.usersRepository.findOneBy({ email: dto.email })
        const checkNis = await this.usersRepository.findOneBy({ nis: dto.nis })
        let errors: string[] = []

        if (checkRfid && (id ? checkRfid.rfid != user.rfid : true)) errors = [...errors, `User with rfid ${dto.rfid} already exist.`]
        if (checkEmail && (id ? checkEmail.email != user.email : true)) errors = [...errors, `User with email ${dto.email} already exist.`]
        if (checkNis && (id ? checkNis.nis != user.nis : true)) errors = [...errors, `User with nis ${dto.nis} already exist.`]

        if (errors.length > 0) throw new BadRequestException(errors)
    }

    async create(createStudentDto: CreateStudentDto) {
        await this.validateUnique(createStudentDto)

        try {
            return await this.usersRepository.save({
                ...createStudentDto,
                password: await bcrypt.hash(createStudentDto.password, 10),
                type: "STUDENT"
            })
        } catch (e) {
            throw new BadRequestException(e.message)
        }
    }

    async findAll() {
        return await this.usersRepository.find({
            relations: {
                class: true,
            },
            where: {
                type: "STUDENT"
            }
        })
    }

    async findOne(id: string) {
        return await this.usersRepository.findOne({
            where: { id, type: "STUDENT" },
            relations: {
                class: true,
            },
        })
    }

    async update(id: string, updateStudentDto: UpdateStudentDto) {
        await this.validateUnique(updateStudentDto, id)

        if (updateStudentDto.password) updateStudentDto = { ...updateStudentDto, password: await bcrypt.hash(updateStudentDto.password, 10) }

        try {
            return await this.usersRepository.update({ id, type: "STUDENT" }, updateStudentDto)
        } catch (e) {
            throw new BadRequestException(e.message)
        }
    }

    async remove(id: string) {
        return await this.usersRepository.delete({ id, type: "STUDENT" })
    }
}
