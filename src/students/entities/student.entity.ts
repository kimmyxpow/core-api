import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    rfid: string;

    @Column()
    nis: string;

    @Column()
    nama: string;

    @Column()
    rombel: string;

    @Column()
    rayon: string;
}

