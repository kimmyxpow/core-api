import { Scan } from './../../scans/entities/scan.entity'
import { Region } from './../../regions/entities/region.entity'
import { Class } from './../../classes/entities/class.entity'
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true, nullable: true })
    rfid: string

    @Column({ unique: true })
    email: string

    @Column({ unique: true })
    nis: string

    @Column()
    name: string

    @Column()
    password: string

    @Column({ type: 'enum', enum: ['TEACHER', 'STUDENT', 'STAFF', 'ADMIN'] })
    type: string

    @ManyToOne(() => Class, (Class) => Class.students, { nullable: true })
    class: Class

    @ManyToOne(() => Region, (region) => region.students, { nullable: true })
    region: Region

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Scan, (scan) => scan.user)
    scans: Scan[]
}
