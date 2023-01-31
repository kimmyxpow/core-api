import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Machine {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ default: true })
    isActive: boolean
}
