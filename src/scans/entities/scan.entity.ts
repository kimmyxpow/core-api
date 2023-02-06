import { Machine } from 'src/machines/entities/machine.entity'
import { User } from 'src/users/entities/user.entity'
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Scan {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, (user) => user.scans, { nullable: true })
    user: User

    @Column()
    date: string

    @Column()
    rfid: string

    @Column()
    address: string

    @ManyToOne(() => Machine, (machine) => machine.scans, { nullable: true })
    machine: Machine

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
