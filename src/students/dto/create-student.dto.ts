import { IsEmail, IsNotEmpty } from 'class-validator'
import { Class } from 'src/classes/entities/class.entity'
import { Region } from 'src/regions/entities/region.entity'

export class CreateStudentDto {
    @IsNotEmpty()
    rfid: string

    @IsNotEmpty()
    nis: string

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    class: Class

    @IsNotEmpty()
    region: Region
}
