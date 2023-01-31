import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MachinesModule } from './machines/machines.module'
import { Machine } from './machines/entities/machine.entity'

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
            entities: [Machine],
            synchronize: true,
        }),
        MachinesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
