import { IsNotEmpty } from 'class-validator';

export class CreateStaffDto {
    @IsNotEmpty()
    rfid: string;

    @IsNotEmpty()
    name: string;
}

