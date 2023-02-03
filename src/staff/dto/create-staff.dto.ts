import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateStaffDto {
    @IsNotEmpty()
    rfid: string

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}

