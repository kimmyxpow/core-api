import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nama_rayon: string;
    pembimbing_rayon: string;
}
