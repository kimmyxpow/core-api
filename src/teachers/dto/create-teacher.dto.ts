import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateTeacherDto {
    @IsNotEmpty()
    rfid: string

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}

