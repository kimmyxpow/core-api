import { Class } from 'src/classes/entities/class.entity'
import { Region } from 'src/regions/entities/region.entity'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    rfid: string

    @Column()
    nis: string

    @Column()
    name: string

    @OneToOne(() => Class)
    class: Class

    @OneToOne(() => Region)
    region: Region
}

