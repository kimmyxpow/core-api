import { User } from './../users/entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { TeachersService } from './teachers.service'
import { TeachersController } from './teachers.controller'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [TeachersController],
    providers: [TeachersService]
})
export class TeachersModule { }
