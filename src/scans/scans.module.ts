import { Module } from '@nestjs/common'
import { ScansService } from './scans.service'
import { ScansController } from './scans.controller'
import { UsersModule } from './../users/users.module'
import { MachinesModule } from './../machines/machines.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Scan } from './entities/scan.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Scan]), UsersModule, MachinesModule],
    controllers: [ScansController],
    providers: [ScansService],
    exports: [ScansService],
})
export class ScansModule {}
