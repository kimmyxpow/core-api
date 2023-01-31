import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nama_rombel: string;
}
