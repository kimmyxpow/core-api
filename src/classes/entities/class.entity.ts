import { User } from './../../users/entities/user.entity'
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => User, (user) => user.class)
    students: User[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
