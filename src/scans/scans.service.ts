import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateScanDto } from './dto/update-scan.dto'
import { Scan } from 'src/scans/entities/scan.entity'
import { MachinesService } from './../machines/machines.service'
import { UsersService } from './../users/users.service'
import { CreateScanDto } from './dto/create-scan.dto'

@Injectable()
export class ScansService {
    constructor(
        @InjectRepository(Scan)
        private scansRepository: Repository<Scan>,
        private readonly machinesService: MachinesService,
        private readonly usersService: UsersService,
    ) {}

    currentDate() {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = today.getFullYear()

        return yyyy + '-' + mm + '-' + dd
    }

    async scan(machine: string, rfid: string) {
        const checkMac = await this.machinesService.findByAdress(machine)
        const checkUser = await this.usersService.findByRfid(rfid)

        if (!checkMac) Logger.warn(`Mesin ${machine} tidak terdaftar!`)
        if (!checkUser) Logger.warn(`RFID ${rfid} tidak terdaftar!`)

        const date = this.currentDate()

        await this.scansRepository.save({
            address: machine,
            machine: checkMac,
            rfid,
            user: checkUser,
            date,
        })

        Logger.log(`Berhasil scan ${machine} ${rfid}`)

        return 'This action adds a new scan'
    }

    async findAll() {
        return await this.scansRepository.find({
            relations: { user: true, machine: true },
        })
    }
}
