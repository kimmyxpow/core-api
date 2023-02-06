import { Scan } from 'src/scans/entities/scan.entity'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm'

@Entity()
export class Machine {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    address: string

    @Column()
    room: string

    @Column()
    description: string

    @Column({ default: false })
    is_attendance: boolean

    @OneToMany(() => Scan, (scan) => scan.machine)
    scans: Scan[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
