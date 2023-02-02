import { IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
    @IsNotEmpty()
    rfid: string;

    @IsNotEmpty()
    name: string;
}

