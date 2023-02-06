import { Module } from '@nestjs/common'
import { MachinesService } from './machines.service'
import { MachinesController } from './machines.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Machine } from './entities/machine.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Machine])],
    controllers: [MachinesController],
    providers: [MachinesService],
    exports: [MachinesService],
})
export class MachinesModule {}
