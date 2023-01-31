import { IsNotEmpty } from 'class-validator'

export class CreateStudentDto {
    @IsNotEmpty()
    rfid: string

    @IsNotEmpty()
    nis: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    class: string

    @IsNotEmpty()
    region: string
}

