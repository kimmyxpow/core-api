import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MachinesModule } from './machines/machines.module'
import { RegionsModule } from './regions/regions.module'
import { ClassesModule } from './classes/classes.module'
import { StaffModule } from './staff/staff.module'
import { UsersModule } from './users/users.module'
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            autoLoadEntities: true,
            synchronize: true,
        }),
        MachinesModule,
        RegionsModule,
        ClassesModule,
        StaffModule,
        UsersModule,
        StudentsModule,
        TeachersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
