import { User } from 'src/users/entities/user.entity'
import { Module } from '@nestjs/common'
import { StaffService } from './staff.service'
import { StaffController } from './staff.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [StaffController],
    providers: [StaffService],
})
export class StaffModule { }

