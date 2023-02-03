import { User } from './../users/entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { StudentsService } from './students.service'
import { StudentsController } from './students.controller'

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [StudentsController],
    providers: [StudentsService]
})
export class StudentsModule { }
